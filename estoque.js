
let estoque = 
{
    joao: 
    [{tipo:"maca", qtd: 1},
        {tipo:"pera", qtd: 1},
    ],
    maria: 
    [
        {tipo:"maca", qtd: 2},{tipo:"banana", qtd: 4},
    ],
};

estoque.joao[0].tipo

export function getEstoque()
{
    return structuredClone(estoque);
}

export function transacao(origem, destino, quantidade, fruta)
{
    if (origem ===destino)
    {
        return;
    }
    if(origem === 'pomar')
    {
        dePomarParaPessoa(destino,quantidade,fruta);
    }

    if(destino === 'pomar')
    {
        const pessoa = estoque(origem);
        let monte;
        for(let i =0; i<pessoa.length;i++)
        {
            if(pessoa[i].tipo === fruta)
            {
                monte = pessoa[i];
                break;
            }
            if(!monte)
            {
               return;
            }
            monte.qtd -= Math.min(quantidade, monte.qtd);
        }
    }

    function dePomarParaPessoa(destino, quntidade, fruta)
    {
        const pessoa = estoque[destino];
        let monte;
        for(let i =0; i<pessoa.length;i++)
        {
            if(pessoa[i].tipo === fruta)
            {
                monte = pessoa[i];
                break;
            }
            if(!monte)
            {
                monte = {'tipo': fruta, 'qnt':0};
                pessoa.push(monte);
            }
            monte.qtd += quantidade;
            return;
        }
        
    }

    function dePessoaParaPomar(origem, quntidade, fruta)
    {
        const pessoa = estoque[destino];
        let monte;
        for(let i =0; i<pessoa.length;i++)
        {
            if(pessoa[i].tipo === fruta)
            {
                monte = pessoa[i];
                break;
            }
            if(!monte)
            {
               return;
            }
            monte.qtd -= Math.min(quantidade, monte.qtd);
        }
        
    }
}