import axios from 'axios';

const KEY = 'AIzaSyB1bFcSeTGgG0gB3GhDzQxEWjrw6o3xBak';

export default axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/place',
    params:{
        type:'gym',
        radius:100,
        key:KEY,
        keyword:'gym'
    }
});


