# AlertaBrotas — Monitoramento Ambiental com IoT

## 1. Sobre o projeto

O **AlertaBrotas** é um protótipo acadêmico desenvolvido como atividade final do curso Técnico em Desenvolvimento de Sistemas do SENAI São Paulo.

O projeto demonstra como dados meteorológicos públicos e a simulação de um sensor de nível de água podem ser utilizados em um painel de monitoramento ambiental relacionado ao município de Brotas, São Paulo.

A aplicação apresenta informações meteorológicas obtidas por meio de uma API e uma leitura simulada do nível de água, permitindo visualizar classificações e testar regras de negócio.

> **Importante:** este projeto possui finalidade exclusivamente educacional. Não realiza previsões de enchentes, não mede o nível real de rios e não substitui os sistemas oficiais de monitoramento ou os canais de emergência.

## 2. Problema investigado

O projeto investiga como dados meteorológicos e o monitoramento simulado do nível de água podem contribuir para o acompanhamento de episódios de chuva intensa e para a conscientização preventiva em Brotas/SP.

A proposta utiliza conceitos de Internet das Coisas (IoT) e desenvolvimento web para demonstrar como informações ambientais podem ser apresentadas de maneira acessível.

A contextualização do problema considera a importância de consultar fontes confiáveis, como notícias, documentos públicos e registros oficiais. O projeto não pressupõe que alagamentos ocorram diariamente nem que os limites utilizados na simulação representem riscos reais.

## 3. Objetivos

### 3.1. Objetivo geral

Desenvolver um protótipo de monitoramento ambiental que demonstre a utilização de dados meteorológicos públicos, simulação de sensores e desenvolvimento web.

### 3.2. Objetivos específicos

- Consultar dados meteorológicos por meio da API Open-Meteo.
- Apresentar informações de temperatura e precipitação no navegador.
- Simular a leitura de um sensor de nível de água.
- Classificar o nível simulado nas categorias Normal, Atenção e Alerta.
- Permitir a execução de testes das regras de negócio.
- Demonstrar conceitos de IoT, programação e desenvolvimento de interfaces web.

## 4. Tecnologias utilizadas

- **HTML5:** estrutura da interface web.
- **CSS3:** estilização e responsividade.
- **JavaScript:** lógica da aplicação e interação com os dados.
- **Open-Meteo API:** fornecimento de dados meteorológicos.
- **ESP32:** microcontrolador utilizado na simulação IoT.
- **Wokwi:** simulador de circuitos eletrônicos.
- **Visual Studio Code:** ambiente de desenvolvimento.
- **Git:** controle de versão.
- **GitHub:** hospedagem do código-fonte e da documentação.

## 5. API meteorológica

**Nome:** Open-Meteo Forecast API

**Documentação oficial:** [Open-Meteo — Forecast API](https://open-meteo.com/en/docs)

**Endpoint:**

`https://api.open-meteo.com/v1/forecast`

### Dados utilizados

- `temperature_2m`: temperatura do ar a dois metros de altura, expressa em graus Celsius.
- `rain`: precipitação, em milímetros, conforme o período retornado pela consulta.

A consulta utiliza coordenadas geográficas de referência de Brotas/SP e o fuso horário `America/Sao_Paulo`.

O acesso utilizado pelo protótipo não exige chave de API. Entretanto, a consulta depende da disponibilidade do serviço externo, da conexão com a internet e das condições de utilização da API.

Os dados apresentados são informações meteorológicas fornecidas pela Open-Meteo e não correspondem a medições realizadas por um sensor físico instalado em Brotas.

## 6. Regra de negócio

O protótipo utiliza faixas percentuais para classificar o nível simulado de água.

| Nível simulado | Classificação |
|---|---|
| 0% a 49% | Normal |
| 50% a 74% | Atenção |
| 75% a 100% | Alerta |

Os limites são didáticos e foram definidos para demonstrar a aplicação de condições lógicas na programação. Não representam parâmetros oficiais de segurança, níveis reais de rios ou critérios técnicos para emissão de alertas.

## 7. Estrutura dos arquivos

A estrutura principal do projeto está organizada da seguinte forma:

```text
iot-brotas/
├── README.md
└── src/
    └── frontend/
        ├── index.html
        ├── style.css
        └── app.js
```

Caso os arquivos da simulação IoT estejam presentes no repositório, a estrutura também poderá incluir:

```text
iot/
├── sketch.ino
└── diagram.json
```

### Descrição dos arquivos

- **`README.md`:** documentação principal, com informações sobre o projeto, seus objetivos, tecnologias e instruções de execução.
- **`src/frontend/index.html`:** estrutura HTML da interface web.
- **`src/frontend/style.css`:** estilos visuais, organização dos elementos e regras de responsividade.
- **`src/frontend/app.js`:** lógica JavaScript responsável pelo comportamento da interface e pela interação com os dados.
- **`iot/sketch.ino`:** código da simulação do ESP32, caso esteja disponível no repositório.
- **`iot/diagram.json`:** configuração do circuito simulado no Wokwi, caso esteja disponível.

A separação dos arquivos facilita a organização, a manutenção e a evolução do projeto.

## 8. Como executar a interface web

1. Clone o repositório ou faça o download dos arquivos do projeto.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `src/frontend/index.html` utilizando a extensão Live Server ou outro servidor local compatível.
4. Certifique-se de que o navegador tenha acesso à internet para consultar a API Open-Meteo.
5. Utilize o botão **Atualizar clima**, caso esteja disponível na interface.
6. Movimente o controle de nível de água para verificar as classificações, caso esse recurso esteja implementado.
7. Utilize o botão **Executar testes**, caso esteja disponível, para verificar os resultados da regra de negócio.

Os procedimentos e os nomes dos controles devem corresponder à versão efetivamente implementada no projeto.

## 9. Simulação IoT com ESP32 e Wokwi

A simulação do circuito pode ser acessada pelo [Wokwi](https://wokwi.com/).

**Link do projeto:** [Abrir simulação do AlertaBrotas no Wokwi](https://wokwi.com/projects/477945600148705281).

Para executar a simulação:

1. Abra o projeto ESP32 no Wokwi.
2. Confira o código e os componentes configurados no circuito.
3. Inicie a simulação.
4. Abra o Monitor Serial, caso esteja previsto na implementação, utilizando a velocidade de 115200 baud.
5. Interaja com o potenciômetro ou com o componente de entrada configurado.
6. Observe os valores e as classificações apresentados.

Os passos dependem dos componentes e do código efetivamente configurados na simulação.

### Integração entre o ESP32 e o painel web

Nesta versão, a simulação ESP32 no Wokwi e o painel web funcionam de forma independente. Os valores gerados no circuito não são enviados automaticamente para a interface web.

A integração entre as plataformas poderá ser desenvolvida futuramente por meio de uma API de backend ou de um protocolo de comunicação, como MQTT.

## 10. Testes da regra de negócio

O protótipo utiliza seis valores de referência para verificar a classificação do nível simulado de água.

| Valor de entrada | Resultado esperado |
|---|---|
| 0% | Normal |
| 49% | Normal |
| 50% | Atenção |
| 74% | Atenção |
| 75% | Alerta |
| 100% | Alerta |

Os testes permitem verificar se a regra de negócio classifica corretamente os valores de acordo com as faixas definidas.

Os resultados dependem da implementação e da execução efetiva dos testes no sistema.

## 11. Melhorias futuras

Como possibilidades de evolução, o projeto poderá incluir:

- Integração entre o ESP32 e o painel web por meio de MQTT ou de uma API de backend.
- Utilização de um sensor físico apropriado, com calibração e testes em ambiente controlado.
- Armazenamento do histórico das medições e geração de gráficos.
- Implementação de notificações baseadas em critérios tecnicamente validados.
- Incorporação de dados oficiais adicionais de monitoramento ambiental.
- Expansão dos testes automatizados.
- Aprimoramento da interface e da acessibilidade.
- Desenvolvimento de uma estrutura para armazenamento e consulta dos dados.

## 12. Segurança e limitações

O AlertaBrotas é um protótipo educacional e não deve ser utilizado para orientar decisões de emergência ou avaliar riscos reais de enchentes.

Os níveis apresentados são simulados e não representam medições reais de rios, limites oficiais de segurança ou previsões hidrológicas.

As informações meteorológicas dependem da disponibilidade da API Open-Meteo e da conexão com a internet. Eventuais falhas no serviço externo podem afetar a atualização dos dados.

A simulação do ESP32 não está integrada automaticamente ao painel web nesta versão.

Senhas, tokens, credenciais e outros dados confidenciais não devem ser publicados no repositório.

Em situações reais de emergência, devem ser consultados os canais oficiais das autoridades competentes.

## 13. Publicação no GitHub

O código-fonte e a documentação do projeto estão organizados em um repositório GitHub.

**Repositório:** [Barbara-Dv/iot-brotas](https://github.com/Barbara-Dv/iot-brotas).

Para manter o repositório organizado:

- Mantenha o README atualizado conforme a implementação.
- Utilize commits que descrevam as alterações realizadas.
- Confira a estrutura dos arquivos antes de publicar atualizações.
- Não inclua credenciais, arquivos confidenciais ou dados pessoais desnecessários.

## 14. Referências

- **Open-Meteo.** *Forecast API — documentação oficial.* Disponível em: https://open-meteo.com/en/docs.
- **Wokwi.** *Simulador de circuitos eletrônicos.* Disponível em: https://wokwi.com/.
- **G1 — São Carlos e Araraquara.** *Após estragos da chuva, Brotas decreta situação de emergência.* Publicado em 19 de março de 2025. Disponível em: https://g1.globo.com/sp/sao-carlos-regiao/noticia/2025/03/19/apos-estragos-da-chuva-brotas-decreta-situacao-de-emergencia.ghtml.
- **Prefeitura Municipal de Brotas.** *Portal oficial.* Disponível em: https://www.brotas.sp.gov.br/.