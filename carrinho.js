let carrinho = [];

function adicionarCarrinho(nome, preco) {
    let item = carrinho.find(p => p.nome === nome);

    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

function alterarQuantidade(nome, valor) {
    let item = carrinho.find(p => p.nome === nome);
    if (!item) return;

    item.quantidade += valor;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(p => p.nome !== nome);
    }

    atualizarCarrinho();
}

function removerItem(nome) {
    carrinho = carrinho.filter(p => p.nome !== nome);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("itens-carrinho");
    const totalSpan = document.getElementById("valor-total");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;

        lista.innerHTML += `
            <div class="item-carrinho">
                <div>
                    <strong>${item.nome}</strong><br>
                    R$ ${item.preco.toFixed(2)}
                </div>
                <div class="controles">
                    <button onclick="alterarQuantidade('${item.nome}', -1)">-</button>
                    ${item.quantidade}
                    <button onclick="alterarQuantidade('${item.nome}', 1)">+</button>
                    <button onclick="removerItem('${item.nome}')">🗑</button>
                </div>
            </div>
        `;
    });

    totalSpan.textContent = total.toFixed(2);
}
