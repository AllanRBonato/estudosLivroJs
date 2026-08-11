// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");

    if (!container) {
        console.error("Elemento #menu-container não encontrado.");
        return;
    }

    fetch("navbar.html")
        .then((response) => {
            if (!response.ok) throw new Error("Erro ao carregar navbar.html");
            return response.text();
        })
        .then((html) => {
            container.innerHTML = html;

            // Inicialização de todas as funções
            iniciarRelogio();
            obterIpPublico();
            iniciarLinksSistema();
            configurarDropdownPerfil();
            configurarUploadFotoLocal(); // <-- Adicionado aqui para ativar o upload
        })
        .catch((erro) => console.error("Erro na navbar:", erro));
});

// Relógio em tempo real
function iniciarRelogio() {
    const elementoDataHora = document.getElementById("mostra_data_hora");
    if (!elementoDataHora) return;

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const seg = zeroAEsquerda(data.getSeconds());
        return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
    }

    elementoDataHora.innerText = formataData(new Date());
    setInterval(() => {
        elementoDataHora.innerText = formataData(new Date());
    }, 1000);
}

// IP Público
async function obterIpPublico() {
    const meuIp = document.getElementById("meu_ip");
    if (!meuIp) return;

    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        meuIp.innerText = data.ip;
    } catch {
        meuIp.innerText = "Indisponível";
    }
}

// Links do Dropdown
function iniciarLinksSistema() {
    const dropdownSystemList = document.getElementById("dropdown-system-list");
    if (!dropdownSystemList) return;

    const links = [
        { text: "📁 Organizador", url: "organizador.html" },
        { text: "👥 Gerência de Usuários", url: "gerencia_usuarios.html" },
        { text: "🛠️ Configuração", url: "config_monitoramento.html" },
        { text: "📊 Projetos", url: "projetos.html" },
        { text: "📈 Dashboard", url: "dashboard.html" },
    ];

    let html = "";
    links.forEach((link) => {
        html += `<a href="${link.url}">${link.text}</a>`;
    });

    dropdownSystemList.innerHTML = html;
}

// Dropdown Toggle
function configurarDropdownPerfil() {
    const btnAvatar = document.getElementById("btn-user-avatar");
    const dropdown = document.getElementById("user-dropdown-list");
    if (!btnAvatar || !dropdown) return;

    btnAvatar.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("ativo");
    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && !btnAvatar.contains(e.target)) {
            dropdown.classList.remove("ativo");
        }
    });
}

// Upload e Persistência Local da Foto de Perfil
function configurarUploadFotoLocal() {
    const btnAlterar = document.getElementById("btn-alterar-foto");
    const inputFile = document.getElementById("input-upload-foto");
    const avatarContainer = document.getElementById("nav-user-avatar");

    if (!btnAlterar || !inputFile || !avatarContainer) return;

    // 1. Carrega foto salva anteriormente no navegador (se houver)
    const fotoSalva = localStorage.getItem("app_user_foto_local");
    if (fotoSalva) {
        aplicarFotoAvatar(fotoSalva);
    }

    // 2. Quando clica no link "Alterar Foto", aciona o seletor de arquivos
    btnAlterar.addEventListener("click", (e) => {
        e.preventDefault();
        inputFile.click();
    });

    // 3. Ao selecionar um arquivo de imagem
    inputFile.addEventListener("change", () => {
        const arquivo = inputFile.files[0];
        if (!arquivo) return;

        // Validação: limita a no máximo 2MB para não estourar o localStorage
        const tamanhoMaximoMB = 2;
        if (arquivo.size > tamanhoMaximoMB * 1024 * 1024) {
            alert("A imagem selecionada deve ter no máximo 2MB.");
            inputFile.value = ""; // Limpa a seleção
            return;
        }

        const leitor = new FileReader();
        leitor.onload = function (evento) {
            const base64Img = evento.target.result;

            // Salva localmente no navegador
            localStorage.setItem("app_user_foto_local", base64Img);

            // Atualiza a visualização no avatar instantaneamente
            aplicarFotoAvatar(base64Img);
        };

        leitor.readAsDataURL(arquivo);
    });

    function aplicarFotoAvatar(urlOuBase64) {
        let img = avatarContainer.querySelector("img");
        if (!img) {
            img = document.createElement("img");
            img.style.cssText = "width: 100%; height: 100%; border-radius: 50%; object-fit: cover;";
            avatarContainer.innerHTML = "";
            avatarContainer.appendChild(img);
        }
        img.src = urlOuBase64;
        avatarContainer.style.background = "transparent";
    }
}