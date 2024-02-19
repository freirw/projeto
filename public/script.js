// script.js
import axios from 'axios';

document.getElementById('btnGetData').addEventListener('click', () => {
    axios.get('/obter-dados')
    .then(response => {
        const data = response.data; // Obtém os dados da resposta
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = ''; // Limpa o conteúdo atual

        // Itera sobre os dados e os exibe na div
        data.forEach(item => {
            const dataDiv = document.createElement('div');
            dataDiv.textContent = JSON.stringify(item);
            dataContainer.appendChild(dataDiv);
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.textContent = 'Erro ao obter os dados';
    });
});
