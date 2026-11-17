/* =========================================
   BLUEBERRYSHOP - ESTILOS PRINCIPAIS
   ========================================= */

/* Cores e configurações gerais */

:root {
    --azul-claro: #dceeff;
    --azul-fundo: #f5f9ff;
    --azul-medio: #9fc7f0;
    --azul-escuro: #456b9e;
    --azul-profundo: #304d79;

    --lilas: #9188cc;
    --lilas-claro: #eeecff;

    --verde: #b9d9b7;
    --verde-escuro: #527d5a;

    --branco: #ffffff;
    --texto: #39465b;
    --texto-suave: #718096;
    --borda: #e5eaf2;

    --sombra: 0 8px 28px rgba(75, 104, 145, 0.09);
    --sombra-hover: 0 15px 36px rgba(75, 104, 145, 0.16);

    --raio: 20px;
    --transicao: 0.25s ease;
}

/* Reset */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    font-family: "Trebuchet MS", "Segoe UI", Arial, sans-serif;
    color: var(--texto);
    background-color: var(--branco);
    line-height: 1.7;
    overflow-x: hidden;
}

body.menu-aberto {
    overflow: hidden;
}

img,
svg {
    display: block;
    max-width: 100%;
}

img {
    height: auto;
}

button,
input,
textarea,
select {
    font: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    color: inherit;
}

a {
    color: inherit;
    text-decoration: none;
}

button:focus-visible,
a:focus-visible {
    outline: 3px solid var(--lilas);
    outline-offset: 4px;
}

::selection {
    color: var(--azul-profundo);
    background: var(--azul-claro);
}

.container {
    width: min(1160px, calc(100% - 40px));
    margin-inline: auto;
}

.secao {
    padding: 92px 0;
}

.skip-link {
    position: absolute;
    top: -100px;
    left: 16px;
    z-index: 9999;
    padding: 10px 16px;
    color: var(--branco);
    background: var(--azul-profundo);
    border-radius: 8px;
}

.skip-link:focus {
    top: 16px;
}

/* Títulos */

h1,
h2,
h3 {
    line-height: 1.25;
    color: var(--azul-profundo);
    font-weight: 800;
    letter-spacing: -0.5px;
}

h1,
h2 {
    font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}

h2 {
    font-size: clamp(1.9rem, 4vw, 2.7rem);
}

h3 {
    font-size: 1.15rem;
}

.subtitulo {
    display: inline-block;
    margin-bottom: 12px;
    color: var(--lilas);
    font-size: 0.88rem;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
}

.titulo-secao {
    max-width: 680px;
    margin: 0 auto 42px;
    text-align: center;
}

.titulo-secao h2 {
    margin-bottom: 12px;
}

.titulo-secao p {
    color: var(--texto-suave);
}

/* Cabeçalho */

.cabecalho {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(229, 234, 242, 0.9);
    backdrop-filter: blur(14px);
}

.cabecalho-conteudo {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
}

.marca {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}

.logo {
    width: 56px;
    height: 56px;
    object-fit: contain;
}

.marca-texto {
    color: var(--azul-profundo);
    font-size: 1.45rem;
    font-weight: 900;
    letter-spacing: -0.8px;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 23px;
}

.menu a {
    position: relative;
    padding: 8px 0;
    color: var(--texto);
    font-size: 0.9rem;
    font-weight: 700;
    transition: color var(--transicao);
}

.menu a:not(.menu-destaque)::after {
    position: absolute;
    right: 0;
    bottom: 1px;
    left: 0;
    height: 2px;
    content: "";
    background: var(--lilas);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transicao);
}

.menu a:hover {
    color: var(--lilas);
}

.menu a:not(.menu-destaque):hover::after {
    transform: scaleX(1);
}

.menu .menu-destaque {
    padding: 10px 17px;
    color: var(--branco);
    background: var(--azul-escuro);
    border-radius: 999px;
    transition:
        background var(--transicao),
        transform var(--transicao);
}

.menu .menu-destaque:hover {
    color: var(--branco);
    background: var(--lilas);
    transform: translateY(-2px);
}

.menu-toggle {
    display: none;
    width: 44px;
    height: 44px;
    padding: 10px;
    cursor: pointer;
    background: var(--azul-fundo);
    border: 1px solid var(--borda);
    border-radius: 12px;
}

.menu-toggle span {
    display: block;
    width: 21px;
    height: 2px;
    margin: 5px auto;
    background: var(--azul-profundo);
    border-radius: 2px;
    transition:
        transform var(--transicao),
        opacity var(--transicao);
}

.menu-toggle[aria-expanded="true"] span:first-child {
    transform: translateY(7px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:last-child {
    transform: translateY(-7px) rotate(-45deg);
}

/* Botões */

.botao {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 23px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 999px;
    font-size: 0.94rem;
    font-weight: 800;
    text-align: center;
    transition:
        transform var(--transicao),
        background var(--transicao),
        box-shadow var(--transicao);
}

.botao:hover {
    transform: translateY(-3px);
}

.botao-principal {
    color: var(--branco);
    background: var(--azul-escuro);
    box-shadow: 0 7px 18px rgba(69, 107, 158, 0.18);
}

.botao-principal:hover {
    background: var(--azul-profundo);
    box-shadow: var(--sombra);
}

.botao-secundario {
    color: var(--azul-profundo);
    background: transparent;
    border-color: #c7d8ef;
}

.botao-secundario:hover {
    background: var(--azul-claro);
}

.botao-branco {
    color: var(--azul-profundo);
    background: var(--branco);
}

.botao-branco:hover {
    background: var(--azul-claro);
}

/* Página inicial */

.hero {
    position: relative;
    overflow: hidden;
    padding: 76px 0 88px;
    background:
        radial-gradient(
            circle at 85% 15%,
            rgba(207, 223, 255, 0.72),
            transparent 34%
        ),
        linear-gradient(130deg, #f5f9ff 0%, #e8f3ff 55%, #f7f8ff 100%);
}

.hero::before {
    position: absolute;
    top: -100px;
    left: -100px;
    width: 280px;
    height: 280px;
    content: "";
    border: 1px solid rgba(145, 136, 204, 0.13);
    border-radius: 50%;
}

.hero-conteudo {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 65px;
}

.hero-texto {
    position: relative;
    z-index: 1;
}

.etiqueta {
    display: inline-block;
    margin-bottom: 23px;
    padding: 8px 15px;
    color: var(--azul-escuro);
    background: var(--branco);
    border: 1px solid #e2e9f7;
    border-radius: 999px;
    font-size: 0.84rem;
    font-weight: 800;
}

.hero h1 {
    margin-bottom: 22px;
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    letter-spacing: -2px;
    line-height: 1.1;
}

.hero h1 span {
    display: block;
    color: var(--lilas);
}

.hero-texto > p {
    max-width: 530px;
    margin-bottom: 28px;
    color: #64738a;
    font-size: 1.05rem;
}

.hero-botoes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-detalhes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 27px;
    color: var(--verde-escuro);
    font-size: 0.88rem;
    font-weight: 800;
}

.hero-imagem {
    position: relative;
    max-width: 490px;
    width: 100%;
    margin-inline: auto;
}

.hero-imagem-moldura {
    position: relative;
    z-index: 1;
    display: flex;
    min-height: 360px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: var(--branco);
    border: 8px solid rgba(255, 255, 255, 0.85);
    border-radius: 34px;
    box-shadow: 0 25px 60px rgba(78, 112, 158, 0.15);
    transform: rotate(1.5deg);
}

.imagem-destaque {
    width: 100%;
    height: 350px;
    object-fit: contain;
    border-radius: 20px;
}

.decoracao {
    position: absolute;
    z-index: 2;
    display: grid;
    width: 54px;
    height: 54px;
    place-items: center;
    color: var(--lilas);
    background: var(--branco);
    border-radius: 50%;
    box-shadow: var(--sombra);
    font-size: 1.7rem;
}

.decoracao-um {
    top: -19px;
    right: 25px;
}

.decoracao-dois {
    bottom: 28px;
    left: -25px;
    color: #80a9db;
}

.decoracao-tres {
    right: -12px;
    bottom: 65px;
    color: var(--verde-escuro);
}

/* Sobre a loja */

.sobre {
    background: var(--branco);
}

.sobre-conteudo {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    align-items: center;
    gap: 76px;
}

.sobre-imagem {
    display: flex;
    min-height: 340px;
    align-items: center;
    justify-content: center;
    padding: 22px;
    background: var(--azul-fundo);
    border: 1px solid var(--borda);
    border-radius: 28px;
}

.sobre-imagem img {
    width: 100%;
    height: 330px;
    object-fit: contain;
    border-radius: 16px;
}

.sobre-texto h2 {
    margin-bottom: 22px;
}

.sobre-texto p {
    margin-bottom: 15px;
    color: var(--texto-suave);
}

.link-decorado {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    color: var(--azul-escuro);
    font-weight: 800;
}

.link-decorado span {
    transition: transform var(--transicao);
}

.link-decorado:hover span {
    transform: translateX(5px);
}

/* Catálogo de produtos */

.produtos {
    background: var(--azul-fundo);
}

.filtros {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: -10px 0 35px;
}

.filtro {
    padding: 10px 20px;
    cursor: pointer;
    color: var(--azul-escuro);
    background: var(--branco);
    border: 1px solid #dce5f3;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 800;
    transition: all var(--transicao);
}

.filtro:hover,
.filtro.ativo {
    color: var(--branco);
    background: var(--azul-escuro);
    border-color: var(--azul-escuro);
}

.grade-produtos {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: stretch;
    gap: 24px;
}

.produto-card {
    min-width: 0;
    overflow: hidden;
    background: var(--branco);
    border: 1px solid var(--borda);
    border-radius: var(--raio);
    box-shadow: 0 5px 18px rgba(75, 104, 145, 0.045);
    transition:
        transform var(--transicao),
        box-shadow var(--transicao),
        border-color var(--transicao);
}

.produto-card:hover,
.produto-card:focus-within {
    border-color: #cddcf3;
    box-shadow: var(--sombra-hover);
    transform: translateY(-5px);
}

.produto-card.oculto {
    display: none;
}

.produto-imagem {
    position: relative;
    display: flex;
    width: 100%;
    height: 230px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    cursor: zoom-in;
    background: #ffffff;
    border: 0;
    border-bottom: 1px solid #f0f2f8;
    transition: background var(--transicao);
}

.produto-imagem:hover {
    background: #fbfcff;
}

.produto-imagem img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform var(--transicao);
}

.produto-imagem[aria-pressed="true"] {
    cursor: zoom-out;
    background: #f4f6ff;
}

.produto-imagem[aria-pressed="true"] img {
    transform: scale(1.12);
}

.produto-info {
    display: flex;
    min-height: 220px;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

.produto-categoria {
    margin-bottom: 8px;
    color: var(--lilas);
    font-size: 0.73rem;
    font-weight: 900;
    letter-spacing: 0.8px;
    text-transform: uppercase;
}

.produto-info h3 {
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.produto-info p {
    margin-bottom: 18px;
    color: var(--texto-suave);
    font-size: 0.9rem;
    line-height: 1.6;
}

.produto-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: var(--azul-escuro);
    font-size: 0.9rem;
    font-weight: 900;
}

.produto-link span {
    transition: transform var(--transicao);
}

.produto-link:hover span {
    transform: translateX(4px);
}

.nota-catalogo {
    max-width: 720px;
    margin: 32px auto 0;
    color: var(--texto-suave);
    font-size: 0.9rem;
    text-align: center;
}

/* Categoria de outras peças */

.produto-em-breve {
    border-style: dashed;
    border-color: #cfd8e8;
}

.em-breve-ilustracao {
    display: grid;
    width: 100%;
    height: 230px;
    place-items: center;
    padding: 30px;
    background: #fafbff;
    border-bottom: 1px solid #f0f2f8;
}

.em-breve-ilustracao svg {
    width: 100px;
    height: 100px;
}

.indisponivel {
    display: inline-block;
    margin-top: auto;
    padding: 6px 12px;
    color: var(--verde-escuro);
    background: #edf7ed;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 800;
}

/* Preços */

.precos {
    background: var(--branco);
}

.grade-precos {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 24px;
}

.preco-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    background: #fbfcff;
    border: 1px solid var(--borda);
    border-radius: 24px;
    text-align: center;
    transition:
        transform var(--transicao),
        box-shadow var(--transicao);
}

.preco-card:hover {
    box-shadow: var(--sombra);
    transform: translateY(-5px);
}

.preco-card-destaque {
    background: linear-gradient(160deg, #f4f2ff, #ffffff);
    border-color: #d9d4f5;
}

.preco-icone {
    width: 76px;
    height: 76px;
    margin-bottom: 17px;
}

.preco-card h3 {
    margin-bottom: 8px;
}

.preco-valor {
    margin-bottom: 8px;
    color: var(--azul-escuro);
    font-size: 2rem;
    font-weight: 900;
}

.preco-card > p:last-child {
    color: var(--texto-suave);
    font-size: 0.9rem;
}

.preco-etiqueta {
    position: absolute;
    top: -13px;
    padding: 5px 15px;
    color: var(--branco);
    background: var(--lilas);
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 800;
}

.aviso-precos {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-top: 30px;
    padding: 20px 24px;
    background: #f2f7ff;
    border: 1px solid #dfeafb;
    border-radius: 16px;
}

.aviso-icone {
    display: grid;
    width: 27px;
    height: 27px;
    flex-shrink: 0;
    place-items: center;
    color: var(--branco);
    background: var(--azul-escuro);
    border-radius: 50%;
    font-size: 0.85rem;
    font-weight: 900;
}

.aviso-precos p {
    color: #596b85;
    font-size: 0.91rem;
}

/* Outras peças */

.outras-pecas {
    background: linear-gradient(120deg, #f0f5ff, #f5f2ff);
}

.outras-conteudo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 28px 65px;
}

.outras-conteudo h2 {
    max-width: 500px;
}

.outras-conteudo > p {
    color: var(--texto-suave);
}

.outras-conteudo .botao {
    justify-self: start;
}

/* Encomendas */

.encomendas {
    background: var(--azul-fundo);
}

.grade-passos {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

.passo-card {
    padding: 30px;
    background: var(--branco);
    border: 1px solid var(--borda);
    border-radius: 22px;
    transition:
        transform var(--transicao),
        box-shadow var(--transicao);
}

.passo-card:hover {
    box-shadow: var(--sombra);
    transform: translateY(-4px);
}

.passo-numero {
    display: grid;
    width: 54px;
    height: 54px;
    margin-bottom: 22px;
    place-items: center;
    color: var(--azul-escuro);
    background: var(--azul-claro);
    border-radius: 17px;
    font-size: 1rem;
    font-weight: 900;
}

.passo-card:nth-child(2) .passo-numero {
    color: #6e67ae;
    background: var(--lilas-claro);
}

.passo-card:nth-child(3) .passo-numero {
    color: var(--verde-escuro);
    background: #e8f4e7;
}

.passo-card h3 {
    margin-bottom: 12px;
}

.passo-card p {
    color: var(--texto-suave);
    font-size: 0.93rem;
}

.encomenda-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 35px;
    padding: 30px 34px;
    background: var(--branco);
    border: 1px solid var(--borda);
    border-radius: 22px;
}

.encomenda-cta h3 {
    margin-bottom: 7px;
}

.encomenda-cta p {
    color: var(--texto-suave);
    font-size: 0.93rem;
}

/* Contato */

.contato {
    overflow: hidden;
    background: linear-gradient(120deg, #658cbd, #8782c6);
}

.contato-conteudo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.contato-texto {
    max-width: 650px;
}

.contato .subtitulo {
    color: #e8e8ff;
}

.contato h2 {
    margin-bottom: 20px;
    color: var(--branco);
}

.contato-texto p {
    max-width: 560px;
    margin-bottom: 27px;
    color: #f1f3ff;
}

.contato-detalhe {
    width: 180px;
    flex-shrink: 0;
    opacity: 0.95;
}

/* Rodapé */

.rodape {
    padding: 38px 0 25px;
    background: #f6f9ff;
    border-top: 1px solid var(--borda);
}

.rodape-conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    text-align: center;
}

.logo-rodape {
    width: 43px;
    height: 43px;
}

.marca-rodape .marca-texto {
    font-size: 1.2rem;
}

.rodape-frase {
    color: var(--texto-suave);
    font-size: 0.9rem;
}

.rodape-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.rodape-links a {
    color: var(--azul-escuro);
    font-size: 0.88rem;
    font-weight: 800;
}

.rodape-links a:hover {
    color: var(--lilas);
}

.copyright {
    width: 100%;
    margin-top: 8px;
    padding-top: 20px;
    color: var(--texto-suave);
    border-top: 1px solid var(--borda);
    font-size: 0.8rem;
}

/* Voltar ao topo */

.voltar-topo {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 900;
    display: grid;
    width: 46px;
    height: 46px;
    place-items: center;
    cursor: pointer;
    color: var(--branco);
    background: var(--azul-escuro);
    border: 0;
    border-radius: 50%;
    box-shadow: var(--sombra);
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition:
        opacity var(--transicao),
        visibility var(--transicao),
        transform var(--transicao),
        background var(--transicao);
}

.voltar-topo.visivel {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.voltar-topo:hover {
    background: var(--lilas);
}

/* Imagens com erro: mensagem de diagnóstico, sem imagem substituta */

.imagem-com-erro {
    position: relative;
    outline: 2px dashed #c77a7a;
    outline-offset: -4px;
}

.imagem-com-erro::after {
    position: absolute;
    inset: 0;
    display: grid;
    padding: 16px;
    place-items: center;
    content: "Imagem não encontrada. Confira o nome e a extensão do arquivo.";
    color: #874444;
    background: #fff5f5;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
}

/* Responsividade: notebooks menores e tablets */

@media (max-width: 1050px) {
    .menu {
        gap: 15px;
    }

    .menu a {
        font-size: 0.84rem;
    }

    .marca-texto {
        font-size: 1.25rem;
    }

    .hero-conteudo {
        gap: 35px;
    }

    .sobre-conteudo {
        gap: 45px;
    }

    .grade-produtos {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

/* Responsividade: menu móvel */

@media (max-width: 820px) {
    html {
        scroll-padding-top: 80px;
    }

    .secao {
        padding: 70px 0;
    }

    .cabecalho-conteudo {
        min-height: 76px;
    }

    .logo {
        width: 48px;
        height: 48px;
    }

    .marca-texto {
        font-size: 1.2rem;
    }

    .menu-toggle {
        display: block;
        position: relative;
        z-index: 1002;
    }

    .menu {
        position: fixed;
        top: 76px;
        right: 0;
        left: 0;
        z-index: 1001;
        display: flex;
        max-height: calc(100dvh - 76px);
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 4px;
        overflow-y: auto;
        padding: 18px 24px 28px;
        background: var(--branco);
        border-bottom: 1px solid var(--borda);
        box-shadow: 0 18px 30px rgba(45, 67, 100, 0.1);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(-8px);
        transition:
            opacity var(--transicao),
            visibility var(--transicao),
            transform var(--transicao);
    }

    .menu.aberto {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
    }

    .menu a {
        padding: 13px 12px;
        font-size: 0.98rem;
    }

    .menu .menu-destaque {
        margin-top: 7px;
        text-align: center;
    }

    .hero {
        padding: 58px 0 72px;
    }

    .hero-conteudo {
        grid-template-columns: 1fr;
        gap: 42px;
    }

    .hero-texto {
        text-align: center;
    }

    .hero-texto > p {
        margin-inline: auto;
    }

    .hero-botoes,
    .hero-detalhes {
        justify-content: center;
    }

    .hero-imagem {
        max-width: 460px;
    }

    .hero-imagem-moldura {
        min-height: 300px;
    }

    .imagem-destaque {
        height: 300px;
    }

    .sobre-conteudo {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .sobre-imagem {
        max-width: 570px;
        width: 100%;
        margin-inline: auto;
    }

    .grade-produtos {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .outras-conteudo {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .grade-passos {
        gap: 15px;
    }

    .passo-card {
        padding: 23px;
    }

    .encomenda-cta {
        align-items: flex-start;
        flex-direction: column;
    }

    .contato-detalhe {
        width: 125px;
    }
}

/* Responsividade: celulares */

@media (max-width: 560px) {
    .container {
        width: calc(100% - 32px);
    }

    .secao {
        padding: 58px 0;
    }

    .titulo-secao {
        margin-bottom: 32px;
    }

    .titulo-secao h2 {
        font-size: 1.9rem;
    }

    .hero {
        padding: 46px 0 58px;
    }

    .hero h1 {
        font-size: clamp(2.5rem, 11vw, 3.3rem);
        letter-spacing: -1.5px;
    }

    .hero-texto > p {
        font-size: 0.96rem;
    }

    .hero-botoes {
        align-items: stretch;
        flex-direction: column;
    }

    .hero-botoes .botao {
        width: 100%;
    }

    .hero-detalhes {
        gap: 10px 17px;
        font-size: 0.8rem;
    }

    .hero-imagem-moldura {
        min-height: 240px;
        padding: 12px;
        border-width: 5px;
        border-radius: 25px;
    }

    .imagem-destaque {
        height: 245px;
    }

    .decoracao {
        width: 43px;
        height: 43px;
        font-size: 1.35rem;
    }

    .sobre-imagem {
        min-height: 245px;
        padding: 12px;
    }

    .sobre-imagem img {
        height: 245px;
    }

    .filtros {
        gap: 8px;
    }

    .filtro {
        padding: 9px 13px;
        font-size: 0.8rem;
    }

    .grade-produtos {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .produto-card {
        border-radius: 15px;
    }

    .produto-imagem {
        height: 165px;
        padding: 9px;
    }

    .produto-info {
        min-height: 220px;
        padding: 13px;
    }

    .produto-categoria {
        font-size: 0.65rem;
        letter-spacing: 0.3px;
    }

    .produto-info h3 {
        font-size: 0.96rem;
    }

    .produto-info p {
        font-size: 0.81rem;
    }

    .produto-link {
        font-size: 0.82rem;
    }

    .em-breve-ilustracao {
        height: 165px;
        padding: 20px;
    }

    .grade-precos {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .preco-card {
        padding: 27px 20px;
    }

    .aviso-precos {
        padding: 17px;
    }

    .grade-passos {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .passo-card {
        padding: 23px;
    }

    .encomenda-cta {
        padding: 24px 20px;
    }

    .encomenda-cta .botao {
        width: 100%;
    }

    .contato-conteudo {
        align-items: flex-start;
        gap: 15px;
    }

    .contato-detalhe {
        display: none;
    }

    .contato h2 {
        font-size: 2rem;
    }

    .contato .botao {
        width: 100%;
    }

    .rodape-links {
        gap: 10px 18px;
    }

    .voltar-topo {
        right: 14px;
        bottom: 14px;
        width: 42px;
        height: 42px;
    }
}

/* Acessibilidade: usuários que preferem menos animações */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}