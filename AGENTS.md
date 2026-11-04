# AGENTS.md

## Visão geral

Minha aplicação tem como gênero textual digital o formato Blog, consistindo em transmitir conhecimentos sobre 5 tipos de dança, sendo elas: Carimbó, Jazz, Hip-Hop, Dança do Ventre e Tango, sendo acresentado músicas populares que representam cada dança. Este blog abrange diversos grupos de público-alvo, além disso, através dele mostrarei a minha ligação, paixão e conexão com a dança.

## Tecnologias

Para a criação do Front-End usaremos a linguagem de Marcação de Hipertexto (HTML) para montar a estrutura do Blog, CSS para a estilização e JavaScript para criar funcionalidades dentro do Blog;

No Back-End teremos a estrutura da API Web Data Viz (em Node.js) que irá enviar os dados disponibilizados na plataforma para o banco de dados relacional (Mysql) que serão armazenados para possíveis consultas. 

## Comandos

Para que a API consiga executar sem nenhum problemas teremos que executar determinados comandos em situações específicas, ou seja, utilizaremos o comando npm install para instalar as dependências necessárias para que a API possa funcionar e nmp start para que ela possa começar a executar suas funcionalidades, além disso, para que possamos parar a execução da aplicação usamos o ctrl + c.

## Arquitetura

Teremos alguns diretórios que serão direcionados para cada função dentro do projeto, sendo eles:

public -> Conterá toda a estrutura do Front-end, desde CSS utilizado para a estilização do site até imagens acrescentadas no blog;

src -> Terá toda a estrutura de Back-end que será usado para especificações e verificações do site

    back: routes, controllers e models:

    O diretório routes irá definir as rotas utilizadas, funcionando como um mapa de endereços para o servidor;

    O diretório controllers fará as verificações da requisição pedida e devolverá uma resposta;

    O diretório models irá executa as querys do sql para que os dados possam ser inseridos ou vizualizados.


## Padrões de desenvolvimento

Utilize como padrão de desenvolvimento a estrutura base da API Web Data Viz para que haja uma melhor padronização, uniformidade e compreensão de leitura para todos que necessitem modificar posteriormente o código tenham facilidade para realizar a manutenção.

## Cuidados e restrições

Nunca modifique a estrutura da API Web Data Viz, sempre mantendo a mesma base da aplicação, caso haja uma sugestão de mudança de estrutura me comunique antes e espere a confirmação para que possa aplica-lá, caso não haja a confirmação para a aplicação desta sugestão não executá-la, além disso, sempre me comunique e me faça participar de todos os passos do projeto, desde documentação até os códigos básicos.


## Regra geral: 

Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.