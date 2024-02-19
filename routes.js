const express = require('express');
const router = express.Router();
const consultaBanco = require('./consultaBanco');
const path = require('path');

// Rota para obter os dados
router.get('/obter-dados', (req, res) => {
    consultaBanco.obterDados((error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter os dados do banco de dados' });
        }
        return res.json(results);
    });
});

router.get('/', (req, res) => {
    // Obtém o caminho absoluto do arquivo HTML
    const htmlPath = path.join(__dirname, 'index.html');

    // Envia o arquivo HTML como resposta
    res.sendFile(htmlPath);
});
module.exports = router;