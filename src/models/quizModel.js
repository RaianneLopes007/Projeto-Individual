
var database = require("../database/config");

async function enviarTentativa(idUsuario) {

    var instrucaoSql = `
        INSERT INTO tentativa_user (fk_usuario)
        VALUES (${idUsuario});
    `;

    console.log("Executando INSERT da tentativa:");

    var resultado = await database.executar(instrucaoSql);
    var idTentativa = resultado.insertId;

    return idTentativa;
}

async function enviarRespostas(id_tentativa, id_pergunta, id_alternativa){
    var instrucaoRespostas = `
        INSERT INTO resposta_user
        (fk_tentativa, fk_pergunta, fk_alternativa)
        VALUES (${id_tentativa}, ${id_pergunta}, ${id_alternativa});
    `;

    console.log("Executando INSERT das respostas:");

    await database.executar(instrucaoRespostas);

}

module.exports = {
    enviarTentativa,
    enviarRespostas
};
