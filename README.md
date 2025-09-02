# Sistema de Fluxo de Matérias de Faculdade

Este projeto é um sistema para gerenciamento do fluxo de matérias em uma faculdade, permitindo que os alunos selecionem disciplinas conforme avançam no curso, respeitando os pré-requisitos definidos.

## Funcionalidades

- **Seleção Condicional de Matérias:**  
  Uma matéria só pode ser selecionada se todas as suas matérias pré-requisito já tiverem sido marcadas pelo usuário.

- **Configuração Dinâmica de Pré-Requisitos:**  
  Ao criar um card de matéria, é possível adicionar ou remover pré-requisitos de forma dinâmica, facilitando a montagem do fluxo curricular.

- **Interface Intuitiva:**  
  Os cards das matérias exibem claramente os pré-requisitos e bloqueiam a seleção até que todos sejam cumpridos.

## Fluxo de Uso

1. **Criação de Matérias:**  
   O usuário pode criar novas matérias, definindo nome, descrição e adicionando/removendo pré-requisitos diretamente no card.

2. **Seleção de Matérias:**  
   O sistema verifica automaticamente se os pré-requisitos de cada matéria foram cumpridos antes de liberar a seleção.

3. **Visualização do Progresso:**  
   O usuário pode acompanhar quais matérias já foram selecionadas e quais ainda estão bloqueadas por pré-requisitos pendentes.

## Tecnologias Utilizadas

- React + Vite
- Gerenciamento de estado para controle dos pré-requisitos e seleção
- Estilização com CSS ou biblioteca de UI à escolha

## Objetivo

Facilitar o planejamento acadêmico, garantindo que o aluno siga corretamente a ordem das disciplinas conforme os pré-requisitos definidos pela instituição.

