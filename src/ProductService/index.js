
import axios from 'axios';

function getProducts() {
    return axios.get('http://localhost:8080/api/products')
        .then(response => response.data)
        .catch(error => {
            return fetch('demo/data/products.json')
                .then(res => res.json())
                .then(data => data.data)  // Certifique-se de ajustar isso de acordo com a estrutura real dos dados
                .catch(fetchError => {
                    console.error('Erro ao obter dados usando fetch:', fetchError);
                    throw fetchError; // Rejeita a Promise para que o erro possa ser tratado mais adiante
                });
        });
}


export {getProducts};