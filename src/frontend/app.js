"use strict";

// Coordenadas de referência de Brotas/SP.
// Os dados meteorológicos vêm da API, não de um sensor local.
const LATITUDE = -22.2842;
const LONGITUDE = -48.1267;

const nivel = document.getElementById("nivel");
const valor = document.getElementById("valor");
const alerta = document.getElementById("alerta");
const mensagem = document.getElementById("mensagem");
const meterFill = document.getElementById("meterFill");
const meter = document.getElementById("meter");

const temp = document.getElementById("temp");
const rain = document.getElementById("rain");
const apiStatus = document.getElementById("apiStatus");
const weatherUpdated = document.getElementById("weatherUpdated");
const refreshWeather = document.getElementById("refreshWeather");

const runTests = document.getElementById("runTests");
const testResult = document.getElementById("testResult");
const testDetails = document.getElementById("testDetails");

function classificarNivel(value) {
  if (value >= 75) {
    return {
      status: "ALERTA",
      classe: "danger",
      cor: "#ff6685",
      mensagem:
        "Nível simulado elevado. Em uma situação real, consulte os canais oficiais."
    };
  }

  if (value >= 50) {
    return {
      status: "ATENÇÃO",
      classe: "attention",
      cor: "#f4bd4f",
      mensagem:
        "Nível simulado intermediário. Continue acompanhando a leitura."
    };
  }

  return {
    status: "NORMAL",
    classe: "normal",
    cor: "#c6ff34",
    mensagem: "Nível dentro da faixa didática definida para o protótipo."
  };
}

function atualizarNivel() {
  const leitura = Number(nivel.value);
  const estado = classificarNivel(leitura);

  valor.textContent = `${leitura}%`;
  alerta.className = `alert ${estado.classe}`;
  alerta.querySelector("strong").textContent = `Status: ${estado.status}`;
  mensagem.textContent = estado.mensagem;

  meterFill.style.width = `${leitura}%`;
  meterFill.style.background = estado.cor;
  meter.setAttribute("aria-valuenow", String(leitura));
}

async function buscarClima() {
  refreshWeather.disabled = true;
  refreshWeather.textContent = "Consultando...";
  apiStatus.textContent = "Consultando API";
  apiStatus.className = "pill neutral";

  const parametros = new URLSearchParams({
    latitude: String(LATITUDE),
    longitude: String(LONGITUDE),
    current: "temperature_2m,rain",
    timezone: "America/Sao_Paulo"
  });

  const url = `https://api.open-meteo.com/v1/forecast?${parametros}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP ${resposta.status}`);
    }

    const dados = await resposta.json();

    if (!dados.current) {
      throw new Error("A API não retornou dados atuais.");
    }

    const temperatura = dados.current.temperature_2m;
    const chuva = dados.current.rain;

    temp.textContent = Number.isFinite(temperatura)
      ? temperatura.toLocaleString("pt-BR", { maximumFractionDigits: 1 })
      : "Indisponível";

    rain.textContent = Number.isFinite(chuva)
      ? chuva.toLocaleString("pt-BR", { maximumFractionDigits: 1 })
      : "Indisponível";

    apiStatus.textContent = "API conectada";
    apiStatus.className = "pill normal";
    weatherUpdated.textContent =
      `Horário informado pela API: ${dados.current.time || "não informado"}`;
  } catch (erro) {
    temp.textContent = "Indisponível";
    rain.textContent = "Indisponível";
    apiStatus.textContent = "Sem conexão";
    apiStatus.className = "pill danger";
    weatherUpdated.textContent =
      "Não foi possível carregar os dados. Verifique a internet e tente novamente.";

    console.error("Erro ao consultar Open-Meteo:", erro);
  } finally {
    refreshWeather.disabled = false;
    refreshWeather.textContent = "Atualizar clima";
  }
}

function executarTestesRegra() {
  const casos = [
    { entrada: 0, esperado: "NORMAL" },
    { entrada: 49, esperado: "NORMAL" },
    { entrada: 50, esperado: "ATENÇÃO" },
    { entrada: 74, esperado: "ATENÇÃO" },
    { entrada: 75, esperado: "ALERTA" },
    { entrada: 100, esperado: "ALERTA" }
  ];

  const resultados = casos.map((caso) => {
    const obtido = classificarNivel(caso.entrada).status;

    return {
      entrada: caso.entrada,
      esperado: caso.esperado,
      obtido,
      passou: obtido === caso.esperado
    };
  });

  const aprovados = resultados.filter((item) => item.passou).length;
  const todosPassaram = aprovados === casos.length;

  testResult.textContent =
    `${aprovados}/${casos.length} testes passaram.`;

  testResult.className =
    `test-result ${todosPassaram ? "success" : "failure"}`;

  const linhas = resultados.map((item) => `
    <tr>
      <td>${item.entrada}%</td>
      <td>${item.esperado}</td>
      <td>${item.obtido}</td>
      <td>${item.passou ? "APROVADO" : "FALHOU"}</td>
    </tr>
  `).join("");

  testDetails.innerHTML = `
    <table class="test-table">
      <thead>
        <tr>
          <th>Entrada</th>
          <th>Esperado</th>
          <th>Obtido</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>${linhas}</tbody>
    </table>
  `;

  console.table(resultados);
  return todosPassaram;
}

nivel.addEventListener("input", atualizarNivel);
refreshWeather.addEventListener("click", buscarClima);
runTests.addEventListener("click", executarTestesRegra);

// Permite executar a função pelo console do navegador.
window.executarTestesRegra = executarTestesRegra;

atualizarNivel();
buscarClima();