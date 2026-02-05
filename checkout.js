const STORAGE_KEY = 'checkout_dados';
const inputs = document.querySelectorAll('.input-group input[required]');
const checkboxTermos = document.getElementById('termos');
const btnFinalizar = document.getElementById('btn-finalizar');


function validarCampo(e) {
    const campo = e.target;
    const erroId = `${campo.parentElement.id}-erro`;
    const elementoErro = document.getElementById(erroId);
    
    if (!campo.value.trim()) {
        elementoErro.textContent = 'Campo obrigatório';
        return false;
    }
    
    return true;
}

function limparErro(e) {
    const campo = e.target;
    const erroId = `${campo.parentElement.id}-erro`;
    const elementoErro = document.getElementById(erroId);
    
    if (elementoErro && campo.value.trim()) {
        elementoErro.textContent = '';
    }
}

function validarTodosCampos() {
    let todosValidos = true;
    
    inputs.forEach(input => {
        if (!validarCampo({ target: input })) {
            todosValidos = false;
        }
    });
    
    return todosValidos;
}


function coletarDados() {
    return {
        email: document.querySelector('#email input').value,
        nome: document.querySelector('#nome input').value,
        cpf_cnpj: document.querySelector('#cpf input').value,
        telefone: document.querySelector('#telefone input').value,
        cep: document.querySelector('#cep input').value,
        endereco: document.querySelector('#endereco input').value,
        numero: document.querySelector('#numero input').value,
        complemento: document.querySelector('#complemento input').value,
        bairro: document.querySelector('#bairro input').value,
        estado: document.querySelector('#estado input').value,
        cidade: document.querySelector('#cidade input').value
    };
}

function salvarDados() {
    const dados = coletarDados();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    console.log('Dados salvos automaticamente');
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);
    
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        const dadosValidos = dados.nome && dados.nome.trim() &&
                             dados.email && dados.email.trim();
        
        if (dadosValidos) {
            const usarDados = confirm(
                'Encontramos seus dados de sua compra anterior:\n\n' +
                `Nome: ${dados.nome}\n` +
                `E-mail: ${dados.email}\n\n` +
                'Deseja usar seus dados?'
            );
            
            if (usarDados) {
                preencherFormulario(dados);
                console.log('Dados anteriores carregados');
                atualizarEstadoBotao();
            }
        } else {
            localStorage.removeItem(STORAGE_KEY);
            console.log('Dados salvos vazios e foram removidos');
        }
    }
}

function preencherFormulario(dados) {
    document.querySelector('#email input').value = dados.email || '';
    document.querySelector('#nome input').value = dados.nome || '';
    document.querySelector('#cpf input').value = dados.cpf_cnpj || '';
    document.querySelector('#telefone input').value = dados.telefone || '';
    document.querySelector('#cep input').value = dados.cep || '';
    document.querySelector('#endereco input').value = dados.endereco || '';
    document.querySelector('#numero input').value = dados.numero || '';
    document.querySelector('#complemento input').value = dados.complemento || '';
    document.querySelector('#bairro input').value = dados.bairro || '';
    document.querySelector('#estado input').value = dados.estado || '';
    document.querySelector('#cidade input').value = dados.cidade || '';
}

function atualizarEstadoBotao() {
    let todosCamposPreenchidos = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            todosCamposPreenchidos = false;
        }
    });
    
    if (todosCamposPreenchidos && checkboxTermos.checked) {
        btnFinalizar.disabled = false;
    } else {
        btnFinalizar.disabled = true;
    }
}

// Carrega os dados no formulário
window.addEventListener('DOMContentLoaded', carregarDados)

inputs.forEach(input => {
    input.addEventListener('blur', validarCampo);
    input.addEventListener('input', limparErro);
    input.addEventListener('blur', salvarDados);
    input.addEventListener('input', atualizarEstadoBotao);
    input.addEventListener('blur', atualizarEstadoBotao);
});

// Verifica se o checkbox está marcado
checkboxTermos.addEventListener('change', atualizarEstadoBotao);

// Botão de finalizar a compra
btnFinalizar.addEventListener('click', () => {
    if (!checkboxTermos.checked) {
        alert('Por favor, aceite os termos para finalizar a compra.');
        return;
    }

    if (!validarTodosCampos()) {
        checkboxTermos.checked = false;
        alert('Por favor, preencha todos os campos obrigatórios antes de aceitar os termos.');
        return;
    }

    salvarDados();
    alert('Compra concluída com sucesso!');
    window.location.href = "paginaprincipal.html";
});