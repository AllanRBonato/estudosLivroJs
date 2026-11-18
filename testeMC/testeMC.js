const cadastroIntegrante = document.getElementById('cadastro_integrante');
const cadastrarVisitante = document.getElementById('cadastrar_visitante');
const cadastrarProduto = document.getElementById('cadastrar_produto');
const btnProcurarIntegranteCadastro = document.getElementById('btn_procurar_integrante_cadastro');
const btnProcurarVisitanteCadastro = document.getElementById('btn_procurar_visitante_cadastro');
const btnProcurarProdutoCadastro = document.getElementById('btn_procurar_produto_cadastro');

// Elementos de Habilitação
const checkSim = document.getElementById('habilitacao_sim');
const checkNao = document.getElementById('habilitacao_nao');

// Arrays -----------
const cadIntegrante = [];
const cadVisitantes = [];
const cadProduto = [];
const historicoVenda = [];

// Habilitação sim e não --------------------------------------------
function configurarCheckboxHabilitacao() {
    checkSim.addEventListener('change', () => {
        if (checkSim.checked) checkNao.checked = false;
    });

    checkNao.addEventListener('change', () => {
        if (checkNao.checked) checkSim.checked = false;
    });
};

function lerValorHabilitacao() {
    if (checkSim.checked) return 'Sim';
    if (checkNao.checked) return 'Não';
    return 'Não informado';
};

// Criar tabela de integrantes já cadastrados
function renderizarTabelaIntegrantes() {
    const divContainer = document.getElementById('cadastrados_integrante');

    if (cadIntegrante.length === 0) {
        divContainer.innerHTML = '<p>Nenhum integrante cadastrado.</p>';
        return;
    }

    let htmlTabela = `
    <table class="tabela-cadastros">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Habilitação</th>
                <th>Nível MC</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
`;

    cadIntegrante.forEach((integrante, index) => {
        htmlTabela += `
            <tr>
                <td>${integrante.nome}</td>
                <td>${integrante.dataNascimento}</td>
                <td>${integrante.endereco}</td>
                <td>${integrante.telefone}</td>
                <td>${integrante.habilitacao}</td>
                <td>${integrante.nivelMc}</td>
                <td>
                    <button type="button" class="btn-acao-tabela" onclick="preencherVisitanteEdicao(${index})">Editar</button>
                </td>
            </tr>
        `;
    });

    htmlTabela += `
            </tbody>
        </table>
    `;

    divContainer.innerHTML = htmlTabela;
}

// Cadastrar integrante --------------------------------------------
cadastroIntegrante.addEventListener('submit', (e) => {
    e.preventDefault();

    // Lista de DOM cadastro integrante ------------------------------------
    const nomeIntegrante = document.getElementById('nome_integrante');
    const dataNascimento = document.getElementById('data_nascimento_integrante');
    const enderecoIntegrante = document.getElementById('endereco_integrante');
    const telefoneIntegrante = document.getElementById('telefone_integrante');
    const nivelMc = document.getElementById('nivel_integrante');

    if (
        nomeIntegrante.value === '' ||
        dataNascimento.value === '' ||
        enderecoIntegrante.value === '' ||
        telefoneIntegrante.value === '' ||
        nivelMc.value === ''
    ) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const novoUsuario = {
        nome: nomeIntegrante.value,
        dataNascimento: dataNascimento.value,
        endereco: enderecoIntegrante.value,
        telefone: Number(telefoneIntegrante.value),
        habilitacao: lerValorHabilitacao(),
        nivelMc: nivelMc.value
    };

    const jaExiste = cadIntegrante.some(item => item.nome.toLowerCase() === novoUsuario.nome.toLowerCase());


    if (jaExiste) {
        alert('Este cadastro já existe!');
    } else {
        cadIntegrante.push(novoUsuario);
        console.log("Integrantes:", cadIntegrante);

        renderizarTabelaIntegrantes();

        nomeIntegrante.value = '';
        dataNascimento.value = '';
        enderecoIntegrante.value = '';
        telefoneIntegrante.value = '';
        checkSim.checked = false;
        checkNao.checked = false;
        nivelMc.value = '';
    }

});

// Botão procurar integrante ---------------------------------------------------------
btnProcurarIntegranteCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const inptProcurarIntegranteCadastro = document.getElementById('input_procurar_integrante_cadastro');

    if (inptProcurarIntegranteCadastro.value === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const termoBusca = inptProcurarIntegranteCadastro.value.toLowerCase();
    const integranteEncontrado = cadIntegrante.find(item => item.nome.toLowerCase() === termoBusca);

    if (integranteEncontrado) {
        alert(`Encontrado: ${integranteEncontrado.nome}`);

        document.getElementById('nome_integrante').value = integranteEncontrado.nome;
        document.getElementById('data_nascimento_integrante').value = integranteEncontrado.dataNascimento;
        document.getElementById('endereco_integrante').value = integranteEncontrado.endereco;
        document.getElementById('telefone_integrante').value = integranteEncontrado.telefone;
        document.getElementById('nivel_integrante').value = integranteEncontrado.nivelMc;

        if (integranteEncontrado.habilitacao === 'Sim') {
            checkSim.checked = true;
            checkNao.checked = false;
        } else if (integranteEncontrado.habilitacao === 'Não') {
            checkNao.checked = true;
            checkSim.checked = false;
        } else {
            checkSim.checked = false;
            checkNao.checked = false;
        }
    } else {
        alert("Integrante não encontrado!");
    }

    inptProcurarIntegranteCadastro.value = '';
});

// Criar tabela de visitantes já cadastrados
function renderizarTabelaVisitantes() {
    const divContainer = document.getElementById('cadastrados_visitantes');

    if (cadVisitantes.length === 0) {
        divContainer.innerHTML = '<p style="color: #64748b; padding: 10px;">Nenhum visitante cadastrado.</p>';
        return;
    }

    let htmlTabela = `
        <div class="tabela-container-scroll">
            <table class="tabela-cadastros">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
    `;

    cadVisitantes.forEach((visitante, index) => {
        htmlTabela += `
            <tr>
                <td>${visitante.nome}</td>
                <td>${visitante.telefone}</td>
                <td>
                    <button type="button" class="btn-acao-tabela" onclick="preencherVisitanteEdicao(${index})">Editar</button>
                </td>
            </tr>
        `;
    });

    htmlTabela += `
                </tbody>
            </table>
        </div>
    `;

    divContainer.innerHTML = htmlTabela;
}


// Cadastrar visitante --------------------------------------------
cadastrarVisitante.addEventListener('click', (e) => {
    e.preventDefault();

    // Lista de DOM cadastro visitante --------------------------------------
    const nomeVisitante = document.getElementById('nome_visitante');
    const telefoneVisitante = document.getElementById('telefone_visitante');

    const novoVisitante = {
        nome: nomeVisitante.value,
        telefone: Number(telefoneVisitante.value)
    };

    const jaExiste = cadVisitantes.some(item => item.nome.toLowerCase() === novoVisitante.nome.toLowerCase());

    if (nomeVisitante.value === '' || telefoneVisitante.value === '') {
        alert('Preencha todos os campos obrigatórios!');
    } else if (jaExiste) {
        alert('Este cadastro já existe!');
    } else {
        cadVisitantes.push(novoVisitante);
        console.log("Visitantes:", cadVisitantes);

        renderizarTabelaVisitantes();

        nomeVisitante.value = '';
        telefoneVisitante.value = '';
    }
});

// Botão procurar visitante ----------------------------------------------------------
btnProcurarVisitanteCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const inptProcurarVisitanteCadastro = document.getElementById('input_procurar_visitante_cadastro');

    if (inptProcurarVisitanteCadastro.value === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const termoBusca = inptProcurarVisitanteCadastro.value.toLowerCase();
    const visitanteEncontrado = cadVisitantes.find(item => item.nome.toLowerCase() === termoBusca);

    if (visitanteEncontrado) {
        alert(`Encontrado: ${visitanteEncontrado.nome}`);

        document.getElementById('nome_visitante').value = visitanteEncontrado.nome;
        document.getElementById('telefone_visitante').value = visitanteEncontrado.telefone;
    } else {
        alert("Visitante não encontrado!");
    }

    inptProcurarVisitanteCadastro.value = '';
});

// Criar tabela de visitantes já cadastrados
function renderizarTabelaProdutos() {
    const divContainer = document.getElementById('cadastrados_produtos');

    if (cadProduto.length === 0) {
        divContainer.innerHTML = '<p style="color: #64748b; padding: 10px;">Nenhum produto cadastrado.</p>';
        return;
    }

    let htmlTabela = `
        <div class="tabela-container-scroll">
            <table class="tabela-cadastros">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor R$</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
    `;

    cadProduto.forEach((prod, index) => {
        htmlTabela += `
            <tr>
                <td>${prod.produto}</td>
                <td>${prod.quantidade}</td>
                <td>R$ ${prod.valor.toFixed(2)}</td>
                <td>
                    <button type="button" class="btn-acao-tabela" onclick="preencherProdutoEdicao(${index})">Editar</button>
                </td>
            </tr>
        `;
    });

    htmlTabela += `
                </tbody>
            </table>
        </div>
    `;

    divContainer.innerHTML = htmlTabela;
}

// Cadastrar produto --------------------------------------------
cadastrarProduto.addEventListener('click', (e) => {
    e.preventDefault();

    // Lista de DOM cadastro produtos ---------------------------------------
    const nomeProduto = document.getElementById('nome_produto');
    const quantidadeProduto = document.getElementById('quantidade_produto');
    const valorProduto = document.getElementById('valor_produto');

    const novoProduto = {
        produto: nomeProduto.value,
        quantidade: Number(quantidadeProduto.value),
        valor: Number(valorProduto.value)
    };

    const jaExiste = cadProduto.some(item => item.produto.toLowerCase() === novoProduto.produto.toLowerCase());

    if (nomeProduto.value === '' || quantidadeProduto.value === '' || valorProduto.value === '') {
        alert('Por favor, preencha todos os campos!');
    } else if (jaExiste) {
        alert('Este cadastro já existe!')
    } else {
        cadProduto.push(novoProduto);
        console.log("Produtos:", cadProduto);

        renderizarTabelaProdutos();

        nomeProduto.value = '';
        quantidadeProduto.value = '';
        valorProduto.value = '';
    }
});

// Botão procurar produto ------------------------------------------------------------
btnProcurarProdutoCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const inptProcurarProdutoCadastro = document.getElementById('input_procurar_produto_cadastro');

    if (inptProcurarProdutoCadastro.value === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const termoBusca = inptProcurarProdutoCadastro.value.toLowerCase();
    const produtoEncontrado = cadProduto.find(item => item.produto.toLowerCase() === termoBusca);

    if (produtoEncontrado) {
        alert(`Encontrado: ${produtoEncontrado.produto}`);

        document.getElementById('nome_produto').value = produtoEncontrado.produto;
        document.getElementById('quantidade_produto').value = produtoEncontrado.quantidade;
        document.getElementById('valor_produto').value = produtoEncontrado.valor;
    } else {
        alert("Produto não encontrado!");
    }

    inptProcurarProdutoCadastro.value = '';
});



configurarCheckboxHabilitacao();