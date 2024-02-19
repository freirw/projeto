const pool = require('./pool'); // Importe o pool de conexões

const consultaBanco = {};

consultaBanco.obterDados = function(callback) {
    pool.query('SELECT * FROM dados_clientes', function(error, results, fields) {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    });
};

module.exports = consultaBanco;