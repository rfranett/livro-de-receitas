# Buscador de Receitas

Este projeto é uma aplicação web simples que permite ao usuário pesquisar receitas a partir de um ingrediente fornecido. Utilizando a API do TheMealDB, a aplicação exibe uma lista de receitas correspondentes, juntamente com detalhes como ingredientes, categoria, origem, instruções e um link para um vídeo no YouTube.

## Funcionalidades

- **Busca de Receitas por Ingrediente:** O usuário insere um ingrediente no campo de busca, e a aplicação faz uma requisição à API do TheMealDB, retornando receitas que contenham esse ingrediente.
- **Exibição de Receitas:** As receitas são exibidas em forma de cartões, contendo uma imagem e o nome da receita.
- **Detalhes da Receita:** Ao clicar em uma receita, o usuário pode ver mais informações, como lista de ingredientes, medidas, instruções de preparo, categoria, origem da receita e um link para um vídeo no YouTube.
- **Tratamento de Erros:** Caso não seja encontrada nenhuma receita ou a API não retorne dados, uma mensagem informativa é exibida.

## Estrutura do Projeto

O projeto é composto por três principais arquivos:

1. **HTML (index.html):**
   - Define a estrutura básica da página, incluindo o título, formulário de busca, contêineres para a lista de receitas e os detalhes da receita.
   - Inclui o arquivo CSS para estilização e o arquivo JavaScript para a funcionalidade dinâmica da aplicação.

2. **CSS (styles.css):**
   - Estiliza o layout da página, incluindo o formulário de busca, os cartões de receita e os detalhes da receita.
   - Utiliza grid layout para organizar a lista de receitas de forma responsiva.
   - Aplica estilização aos botões, entradas de texto, e aos elementos de detalhes da receita, como imagens e listas.

3. **JavaScript (scripts.js):**
   - Contém a lógica para buscar receitas na API do TheMealDB, exibir os resultados e mostrar os detalhes de uma receita selecionada.
   - Inclui funções para:
     - Capturar o evento de envio do formulário de busca.
     - Fazer requisições à API de forma assíncrona e tratar os dados recebidos.
     - Renderizar a lista de receitas e seus detalhes.
     - Exibir uma mensagem de erro caso nenhuma receita seja encontrada.

## Como Funciona

1. O usuário digita o nome de um ingrediente no campo de busca e clica no botão "Buscar".
2. A aplicação faz uma requisição à API do TheMealDB, passando o ingrediente como parâmetro.
3. As receitas que contêm o ingrediente são exibidas na tela em forma de cartões.
4. O usuário pode clicar em um cartão para visualizar mais detalhes da receita, como os ingredientes e as instruções de preparo.
5. Caso não sejam encontradas receitas, a mensagem "Nenhuma receita encontrada" é exibida.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo.
- **CSS3**: Estilização da interface.
- **JavaScript**: Manipulação do DOM e integração com a API.
- **API TheMealDB**: Fonte dos dados das receitas.

## Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. Digite um ingrediente no campo de busca e veja as receitas relacionadas.

## Possíveis Melhorias Futuras

- Implementar a tradução automática de ingredientes usando uma API de tradução.
- Melhorar a exibição dos detalhes da receita, incluindo mais informações, como tempo de preparo ou nível de dificuldade.
- Adicionar animações e transições para melhorar a experiência do usuário.
