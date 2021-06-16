/*const db = require("../../database/usuarios.json")*/
const fs = require('fs')
const path = require('path')

const caminho = "C:/Desenvolvimento/Faculdade/PROJETO INTEGRADOR/backend/database/usuarios.json"

function create(content) {
    const lstUsuarios = load()
    const id = lstUsuarios.length ? lstUsuarios.length + 1 : 1
    content.id = id;
    lstUsuarios.push(content)
    const contentString = JSON.stringify(lstUsuarios)
    fs.writeFileSync(caminho, contentString)
}
function update(content) {
    const contentString = JSON.stringify(content)
    fs.writeFileSync(caminho, contentString)
}
function load() {
    const fileBuffer = fs.readFileSync(caminho)
    return !fileBuffer.toString() ? [] : JSON.parse(fileBuffer.toString())
}

    exports.getUsuarios = (req, res, next) => {
    const usuarios = load();
    res.status(200).json(usuarios);
};
exports.getUsuario = (req, res, next) => {
    const id = req.params.id;
    let index;
    const usuarios = load();
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            index = i
            break;
        }
    }
    if (index || index == 0) {
        res.status(200).json(usuarios[index])
    }
    else {
        res.status(404)
    }
};
exports.post = (req, res, next) => {
    const usuario = req.body;
    create(usuario);
    res.status(201)
        .send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    const usuario = req.body;
    const id = req.params.id;
    let index;
    const usuarios = load();
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            index = i
            break;
        }
    }
    if (index || index == 0) {
        usuarios[index] = usuario
        update(usuarios)
        res.status(204).send(`Usuário ${id} alterado com sucesso!`);
    }
    else {
        res.status(404).send("Deu ruim.");
    }
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    let index;
    const usuarios = load();
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            index = i
            break;
        }
    }
    if (index || index == 0) {
        //usuarios[index] = usuario
        usuarios.splice(index,1);
        update(usuarios)
        res.status(204).send(`Usuário ${id} excluído com sucesso!`);
    }
    //res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
