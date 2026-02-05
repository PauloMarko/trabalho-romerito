# Site de Vendas de Óculos

#### Componentes
- Isaac da Costa Barbosa
- Mateus Felipe Pereira Costa
- Marcos Paulo Alves de Araújo

### Descrição do Projeto
Este projeto consiste no desenvolvimento de uma plataforma de comércio eletrônico especializada na venda de óculos, inspirada no modelo de negócio e na experiência de usuário do site da Oakley, marca reconhecida mundialmente pela excelência em design e qualidade de seus produtos ópticos.

### Objetivo do Projeto
Desenvolver um **protótipo funcional (MVP)** de uma plataforma de e-commerce especializada em óculos, com foco nas seguintes entregas principais:

- Interface moderna, **responsiva** e visualmente atrativa (funciona bem em desktop, tablet e celular)
- Fluxo completo de compra demonstrativo para um produto: 
	→ Visualização detalhada do produto 
	→ Adição ao carrinho 
	→ Visualização do carrinho 
	→ Checkout com validações de formulário 
- Persistência do carrinho no navegador (usando **localStorage**) - Experiência de usuário intuitiva, com boas práticas de usabilidade e feedback visual 
- Código organizado, limpo e preparado para futura expansão (fácil adicionar mais produtos, filtros, busca, etc.)

### Páginas principais
- `paginaprincipal`: Este é a página principal do site contendo os produtos e o carrinho. Você seleciona um produto com o botão 'Adicionar ao carrinho' em que adiciona o produto ao carrinho, em que, pode definir quantidades dele e atualiza o valor dele e também você pode deletar o produto no carrinho. Portanto, ao clicar em comprar vai redirecioná-lo ao chekout/pagamento.

- `checkout`: Este é a página de pagamento dos produtos inseridos ao carrinho. Aqui você insere os dados que a maioria são obrigatórios e tem um checkbox para marcar que são os termos e condições de uso, e o botão 'Concluir compra' é responsável por finalizar a compra, porém, só vai funcionar se todos os campos obrigatórios são preenchidos e o checkbox marcado. Além disso, ao clicar, os dados são salvos e podem ser reutilizados para novas compras além de voltar à página inicial, ao retornar ao checkout, ele solicitará a utilização desses dados salvos , se não aceito, os dados atuais são apagados para novos dados.
