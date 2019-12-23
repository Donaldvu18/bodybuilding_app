import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    params:{
        apiKey: process.env.REACT_APP_FOOD_API_KEY,
        number:6
    }
})