const express = require('express')
const app = express()
const port = 3000


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


app.use(express.json());

app.get('/teste', (req, res) =>{
    res.send('api ok')
    console.log('api ok')
})


//listar todos os materiais
app.get('/materials', (req, res) =>{    
    res.status(200).json(data)
    
})

//criar um material novo
app.post('/materials', (req, res) =>{

    let newMaterial = req.body
    newMaterial.id = data.materiais.length
    data.materiais.push(newMaterial)

    res.status(201).json({"created_material": newMaterial.id})
    
})

//buscar material pelo ID
app.get('/materials/:id', (req, res) =>{
    let idMaterial = req.params.id
    let materialName = data.materiais[idMaterial].nome
    let materialQtd = data.materiais[idMaterial].quantidade

    res.status(200).json({"material": {"id": idMaterial, "nome": materialName, "quantidade": materialQtd}})

})

//alterar material pelo ID
app.put('/materials/:id', (req, res) =>{
    let idMaterial = req.params.id
    let aleterMaterial = req.body
    let newName = aleterMaterial.nome
    let newQtd = aleterMaterial.quantidade
    
    data.materiais[idMaterial].nome = newName
    data.materiais[idMaterial].quantidade = newQtd

    res.status(200).json({"material": {"nome": newName, "quantidade": newQtd}})
    
})


//remover material pelo ID
app.delete('/materials/:id', (req, res) => {
    let idMaterial = req.params.id

    data.materiais.splice(idMaterial, 1);

    //alterar o indice da lista data com base no seu indice
    for (let i = 0; i < data.materiais.length; i++) {
        data.materiais[i].id = i
    }

    res.status(200).json(data)
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
    })