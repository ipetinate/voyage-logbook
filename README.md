
# Voyage Logbook Reports

- Diário de Bordo da Viagem Intergaláctica.



[![Netlify Status](https://api.netlify.com/api/v1/badges/9576dd88-4570-464e-95ae-eef695f6b0e5/deploy-status)](https://app.netlify.com/sites/voyage-logbook/deploys) ![Build and Deploy](https://github.com/ipetinate/voyage-logbook/workflows/Build%20and%20Deploy/badge.svg?branch=master)

  ## Descrição

- Voyage Logbook Reports é um aplicativo web que permite que você crie planos de viagem e adicione-os ao seu Diário de Bordo de Viagem.

## Funcionalidades

- Criar Planos com Descrição da Atividade e Planeta onde será feita a atividade;
- Verificar os planos em formato de lista;

* Propostas para a Próxima versão:
	- Permitir que o Comandante baixe o relatório contendo todos os planos;
	- Criação de vários relatórios nomeados;
	- Compartilhamento de relatórios;
	- Edição dos planos;

## Persistência dos dados
- Todos os dados dos planos são adicionados ao ``window.localStorage`` no Navegador, permitindo que você saia da aplicação e seus dados continuem lá, até que a limpeza dos dados de navegação ou remoção manual seja feita.

## Tecnologias

![MaterialUI](https://github.com/ipetinate/voyage-logbook/blob/master/doc/img/mui.jpg) ![React](https://github.com/ipetinate/voyage-logbook/blob/master/doc/img/react.jpg)  ![PWA](https://github.com/ipetinate/voyage-logbook/blob/master/doc/img/pws.jpg)

## Scripts Disponíveis



Dentro do diretório do projeto, você pode rodar:



### `yarn start`



Roda a aplicação em modo de desenvolvimento.<br />

Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.



A página irá atualizar sozinha quando você fizer alterações.<br />

E você também poderá ver erros encontrados no console.



### `yarn test`



Inicia o runner de testes no modo de observação interativo.<br />


### `yarn build`



Cria o aplicativo para produção na pasta `build`.<br />

Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.


A compilação é minificada e os nomes de arquivos incluem os hashes. <br />

E seu aplicativo estará pronto para ser publicado!
