let data = {
    materiais: [
        {
        "id": 0,
        "nome": "madeira",
        "quantidade": 50
        },
        {
        "id": 1,
        "nome": "carvao",
        "quantidade": 100
        },
        {
        "id": 2,
        "nome": "carvalho",
        "quantidade": 300
        }
]
}

for (let i = 0; i < data.materiais.length; i++) {
    const material = data.materiais[i];
    console.log("Índice: " + i);
    console.log("ID: " + material.id);
    console.log("Nome: " + material.nome);
    console.log("Quantidade: " + material.quantidade);
    console.log("------------"); // Apenas para separar os objetos
}

