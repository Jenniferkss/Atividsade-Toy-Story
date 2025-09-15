import dados from "../models/dados.js"
const {personagens} = dados; 

const getAllPersonagens = (req,res) => {
    const resultado = personagens;
    res.status(200).json({
        total: resultado.lenght,
        personagens: resultado
    })
};

const getPersonagensById = (req,res)=> {
    let id = parseInt(req.params.id);

    const personagem = personagens.find(p => p.id === id);
    res.status(200).json({
        sucess:true,
       personagem: personagem
    })
};

const createpersonagem = (req,res) => {
    const {nome,tipo,anoFabricacao,cor,quantidadeEstoque} = req.body;

    if(!nome || !tipo){
        return res.status(400).json({
            sucess: false, 
            message: "Nome e tipo sao obrigatórios"
        })
    }

    const novoPersonagem = {
    id: personagens.length +1,
    nome: nome,
    tipo: tipo,
    anoFabricacao: anoFabricacao,
    cor: cor,
    quantidadeEstoque:quantidadeEstoque
}

personagens.push(novoPersonagem);
res.status(201).json({
    sucess:true, 
    message:"Personagem cadastrado com sucesso!",
    personagem: novoPersonagem
})
};

const deletePersonagem = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "ID deve ser um número válido!"
        });
    }

    const idParaApagar = parseInt(id);
    
    const personagemParaRemover = personagens.find(p => p.id === idParaApagar);
    if (!personagemParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Personagem com ID ${id} não encontrado para remoção!`
        });
    }

    const personagemFiltrado = personagens.filter(personagem => personagem.id !== idParaApagar);
    
    personagens.splice(0, personagens.length, ...personagemFiltrado);

    res.status(200).json({
        success: true,
        message: `Personagem ${personagemParaRemover.nome} (ID: ${id}) foi removido dos registros.`,
        personagemRemovida: personagemParaRemover
    });
};

const updatePersonagem = (req,res) => {
    const id = parseInt(req.params.id);
    const {nome,tipo,anoFabricacao,cor,quantidadeEstoque} = req.body

    const idParaEditar = id; 

    if(isNaN(idParaEditar)){
        return res.status(404).json({
            sucess: false,
            message: `Personagem com Id: ${id} não existe`
        })
    }
const personagensAtualizados = personagens.map(personagem => personagem.id === idParaEditar ? {
    ...personagem,
    ...(nome && {nome}),
    ...(tipo && {tipo}),
    ...(anoFabricacao && {anoFabricacao: parseInt(anoFabricacao)})

}: personagem) 

personagens.splice(0,personagens.length,...personagensAtualizados);
const personagemNova = personagens.find(personagem => personagem.id === idParaEditar);

res.status(200).json({
    sucess: true,
    message: `Dados do Personagem ID ${idParaEditar} atualizados com sucesso!`,
    personagem: personagemNova
})
}

export {getAllPersonagens, getPersonagensById, createpersonagem,deletePersonagem,updatePersonagem}