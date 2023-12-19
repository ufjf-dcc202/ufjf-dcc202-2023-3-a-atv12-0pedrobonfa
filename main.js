import { getEstoque, transacao } from "./estoque.js";

document.entrada.addEventListener('submit', leFormulario);
document.entrada.reset();

const olJoao = document.querySelector("#olJoao")
const olMaria = document.querySelector("#olMaria")

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnLimpaEstoque').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});

atualizaTela();

function leFormulario(event)
{
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const origem = document.entrada.quantidade.value;
    const destino = document.entrada.quantidade.value;

    console.log(`Solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    transacao(origem,destino,quantidade,fruta)
    atualizaTela();

}

    function atualizaTela()
    {
        const estoque = getEstoque();
        preencheListaPessoa(estoque['joao'], olJoao);
        preencheListaPessoa(estoque['maria'], olMaria);
    }

    function preencheListaPessoa(lista, estoqueDaPessoa) {
        lista.textContent = "";
        if (Array.isArray(estoqueDaPessoa)) {
            for (let i = 0; i < estoqueDaPessoa.length; i++) {
                const monte = estoqueDaPessoa[i];
                const li = document.createElement('li');
                li.textContent = `${monte.tipo}: ${monte.quantidade}`;
                lista.appendChild(li);
            }
        }
    }
