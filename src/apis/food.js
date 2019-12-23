import axios from 'axios';

const KEY='36db524f87534612855aa1875e47f1b2'

export default axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    params:{
        apiKey:KEY,
        number:6
    }
})