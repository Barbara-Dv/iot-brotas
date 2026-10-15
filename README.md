# AlertaBrotas — Monitoramento Ambiental com IoT

## 1. Sobre o projeto

O AlertaBrotas é um protótipo acadêmico desenvolvido para a atividade final do curso Técnico em Desenvolvimento de Sistemas do Senai São Paulo.

A proposta demonstra como dados meteorológicos públicos e um sensor simulado podem ser utilizados em um painel de monitoramento ambiental relacionado a Brotas/SP.

O projeto é demonstrativo. Não realiza previsão de enchentes, não mede o nível real de rios e não substitui os canais oficiais de emergência.

## 2. Problema investigado

O projeto investiga como dados meteorológicos e monitoramento simulado poderiam contribuir para acompanhar episódios de chuva intensa e apoiar a conscientização preventiva em Brotas/SP.

A justificativa deve ser acompanhada de fontes verificáveis, como notícias confiáveis, documentos públicos e registros oficiais.

O projeto não afirma que alagamentos acontecem diariamente nem que os limites simulados representam risco real.

## 3. Objetivo

Desenvolver um protótipo que:

- Consulte dados meteorológicos da API Open-Meteo.
- Apresente temperatura e chuva no navegador.
- Simule a leitura de um sensor de nível de água.
- Classifique o nível em Normal, Atenção ou Alerta.
- Permita executar testes da regra de negócio.
- Demonstre conceitos de IoT e desenvolvimento web.

## 4. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API Open-Meteo
- ESP32
- Wokwi
- Visual Studio Code
- Git e GitHub

## 5. API utilizada

**Nome:** Open-Meteo Forecast API

**Documentação oficial:** [Open-Meteo](https://open-meteo.com/en/docs)

**Endpoint:**

`https://api.open-meteo.com/v1/forecast`

**Dados utilizados:**

- `temperature_2m`: temperatura do ar a dois metros de altura.
- `rain`: valor de precipitação retornado pela API para o período consultado.

A consulta utiliza coordenadas de referência de Brotas/SP e o fuso horário `America/Sao_Paulo`.

O acesso utilizado no protótipo não exige chave de API. A disponibilidade depende do serviço externo, da conexão e das condições de uso da API.

Os dados são meteorológicos fornecidos pela API, e não medições de um sensor instalado na cidade.

## 6. Regra de negócio

O protótipo utiliza as seguintes faixas para classificar o nível simulado de água:

| Nível simulado | Classificação |
|---|---|
| 0% a 49% | Normal |
| 50% a 74% | Atenção |
| 75% a 100% | Alerta |

Os limites são didáticos e foram definidos para demonstrar a lógica de programação. Não representam limites oficiais de segurança.

## 7. Estrutura dos arquivos

O projeto está organizado em uma pasta principal e contém os arquivos responsáveis pela interface web e pelo funcionamento da aplicação.

```text
iot-brotas/
└── src/
    └── frontend/
        ├── app.js
        ├── index.html
        └── style.css
└── README.md
```

**Descrição dos arquivos:**

- `README.md`: documentação principal do projeto, com informações sobre seus objetivos, funcionalidades e instruções de execução.
- `src/frontend/index.html`: estrutura HTML da interface do sistema.
- `src/frontend/style.css`: estilos visuais da interface, incluindo a organização dos elementos e a responsividade.
- `src/frontend/app.js`: lógica JavaScript responsável pelo comportamento da interface e pela interação com os dados do sistema.

A organização dos arquivos separa os componentes da interface web, facilitando a manutenção e a evolução do projeto.

## 8. Como executar a interface

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o arquivo `index.html` no navegador. Recomenda-se utilizar a extensão Live Server.
3. Permita o acesso à internet para consultar a API Open-Meteo.
4. Utilize o botão **Atualizar clima**.
5. Mova o controle de nível para verificar as classificações.
6. Clique em **Executar testes** e registre os resultados.

Os nomes dos botões devem corresponder aos que realmente existem na interface.

## 9. Como executar a simulação IoT

1. Acesse o [Wokwi](https://wokwi.com/).
2. Crie ou abra um projeto ESP32.
3. Utilize o código do arquivo `iot/sketch.ino`.
4. Configure o circuito conforme o arquivo `iot/diagram.json`, se disponível.
5. Inicie a simulação.
6. Abra o Monitor Serial com a velocidade de 115200 baud.
7. Gire o potenciômetro e observe as classificações exibidas.

Nesta versão, a simulação ESP32 e o painel web são independentes. A leitura do potenciômetro não é enviada automaticamente ao navegador.

## 10. Testes

O painel prevê seis casos de teste para a regra de classificação:

- 0%: Normal.
- 49%: Normal.
- 50%: Atenção.
- 74%: Atenção.
- 75%: Alerta.
- 100%: Alerta.

Execute os testes no navegador e registre os resultados efetivamente observados.

Registre também evidências das três classificações no Wokwi, caso essa simulação esteja implementada.

## 11. Melhorias futuras

- Integrar o ESP32 ao painel por MQTT ou por uma API de backend.
- Utilizar um sensor físico apropriado e calibrado em ambiente controlado.
- Registrar o histórico das medições e gerar gráficos.
- Criar notificações com regras validadas por especialistas.
- Incorporar dados oficiais adicionais e fontes de alertas públicos.

## 12. Segurança e limitações

O protótipo não deve ser utilizado para tomar decisões de emergência.

Não publique senhas, tokens ou credenciais no GitHub.

Os níveis simulados não representam critérios técnicos oficiais e não devem ser interpretados como previsões de enchentes ou alertas reais.

## 13. Publicação no GitHub

Para publicar o projeto:

1. Crie um repositório no GitHub.
2. Adicione os arquivos do projeto.
3. Confira se o README corresponde à implementação real.
4. Inclua o relatório e as capturas de tela das evidências, quando disponíveis.
5. Faça commits que representem as alterações realmente realizadas.

Não inclua arquivos confidenciais, credenciais ou dados pessoais desnecessários.

## 14. Referências

- Open-Meteo. [Documentação oficial da API](https://open-meteo.com/en/docs).
- Wokwi. [Simulador de circuitos eletrônicos](https://wokwi.com/).
- G1. [Notícia sobre a situação de emergência em Brotas, publicada em março de 2025](https://g1.globo.com/sp/sao-carlos-regiao/noticia/2025/03/19/apos-estragos-da-chuva-brotas-decreta-situacao-de-emergencia.ghtml).
- Prefeitura Municipal de Brotas. [Portal oficial](https://www.brotas.sp.gov.br/).