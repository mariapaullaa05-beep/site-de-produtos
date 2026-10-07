let produtos = [
    {
        nome: "Caneca",
        preco: 30,
        categoria: "Casa",
        imagem:"https://images.tcdn.com.br/img/img_prod/908316/caneca_em_porcelana_azul_colonial_200_ml_1_20260617152833_11fda502342f.jpeg"
    },
    {
        nome: "Agenda",
        preco: 45,
        categoria: "Papelaria",
        imagem: "https://wbl.blob.core.windows.net/img-cdn/img-otm/v2/135/og-1-agenda-permanente-148x210mm-em-capa-dura-e-miolo-padrao-em-sulfite-63g-4x0-laminacao-frente-wire-o-branco-capa-dura_15981.jpg"
    },
    {
        nome: "Garrafa",
        preco: 50,
        categoria: "Casa",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-ScTJUv2VmWiq1ykBSIUKUs6xsLFArBQ_VNT9Li6ulf6qL6omSroFDoW&s=10"
    },
    {
        nome: "Caderno",
        preco: 25,
        categoria: "Papelaria",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOvT1f6DTBQL2IcoFphIsV-XsGC1px3Kaa53cWt3UtwcBhBzz9clgXFgU&s=10"
    }
];

let lista = document.querySelector("#lista");
let areaProdutos = document.querySelector("#Produtos");


produtos.forEach(function(produto) {
    lista.innerHTML += `<li>${produto.nome}</li>`;
    
});


produtos.forEach(function(produto) {
    areaProdutos.innerHTML += `
        <div class="card">

            <img src="${produto.imagem}" alt= "${produto.nome}>

            <h2>${produto.nome}</h2>


            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>

            <button onclick="adicionarCarrinho('${produto.nome}')">
            Adicionar ao carrinho
            </button>
        </div>
    `;
});

let busca = document.querySelector("#busca");

function mostrarProdutos (lista) {
    areaProdutos.innerHTML = "";

    if(lista.lenght === 0) {
        areaProdutos.innerHTML = ` 
        <p>Nenhum produto encontrado.</p>

        `;
        return;
    }
}
 
busca.addEventListener("input", function() {

    let texto = busca.ariaValueMax.toLowerCase();

    let encontrados = produtos.filter (function(produto) {

        return produto.nome
        
        .toLowerCase()

        .includes(texto);

    });

    mostrarProdutos(encontrados);

});

let carrinho =  JSON.parse(localStorage.getItem("carrinho")) ||[];

let areaCarrinho = document.querySelector("#carrinho");
let totalCarrinho = document.querySelector("#total");

function adicionarCarrinho(nomeProduto) {
    let produroEscolhido = produtos.find(function(produto) {
        return produto.nome === nomeProduto;

    });

    carrinho.push(produroEscolhido);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarQuantidadeCarrinho();
}

function mostrarCarrinho() {
    areaCarrinho.innerHTML = "";

    let total = 0;

    carrinho.forEach(function(item) {
        areaCarrinho.innerHTML += `
        <div class="item-carrinho">
        <span> ${item.nome}</span>
        
        <span>
        R$ ${item.preco.toFixed(2)}</span>
        </div>
        `;

        total = total + item.preco;
    });

    totalCarrinho.innerHTML = "Total R$ " + total.toFixed(2);
}

function atualizarQuantidadeCarrinho() {
    atualizarQuantidadeCarrinho.innerText = carrinho.lenght;
}

