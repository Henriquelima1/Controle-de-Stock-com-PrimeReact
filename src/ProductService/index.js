
import axios from 'axios';

function getProducts() {
    return axios.get('http://localhost:8080/api/exemplo/dados')
        .then(response => response.data)
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            throw error; // Rejeita a Promise para que o erro possa ser tratado mais adiante
        });
}


export {getProducts};