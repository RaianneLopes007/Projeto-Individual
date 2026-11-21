var database = require("../database/config");

async function buscarDesempenhoPorCategoria(idUsuario) {

    var intrucaoGrafico = `
        SELECT p.categoria AS categoria,
            SUM(a.correta) AS acertos,
            COUNT(*) AS total,
            ROUND(SUM(a.correta) * 100 / COUNT(*), 1) AS percentual
        FROM tentativa_user t
        JOIN resposta_user AS r ON r.fk_tentativa = t.idTentativa
        JOIN pergunta AS p ON p.idPergunta    = r.fk_pergunta
        JOIN alternativa AS a ON a.idAlternativa = r.fk_alternativa
        WHERE t.fk_usuario = ${idUsuario}
        AND t.idTentativa = (SELECT MAX(idTentativa) FROM tentativa_user WHERE fk_usuario = ${idUsuario})
        GROUP BY p.categoria
        ORDER BY FIELD(p.categoria, 'Jazz', 'Hip-hop', 'Dança do ventre', 'Tango', 'Carimbó')
    `;

    console.log("Executando SELECT da tentativa atual");

    return await database.executar(intrucaoGrafico);
}

async function totalRespostasCertas(idUsuario) {

    var intrucaoKpi = `
        SELECT
            SUM(a.correta) AS acertos,
            COUNT(*) AS total_questoes
        FROM tentativa_user t
        JOIN resposta_user r ON r.fk_tentativa = t.idTentativa
        JOIN alternativa   a ON a.idAlternativa = r.fk_alternativa
        WHERE t.fk_usuario = ${idUsuario};
    `;

    console.log("Executando SELECT da soma total de acertos");

    return await database.executar(intrucaoKpi);
}

module.exports = {
    buscarDesempenhoPorCategoria,
    totalRespostasCertas
};