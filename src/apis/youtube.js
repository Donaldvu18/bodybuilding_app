import axios from 'axios';

const KEY = 'AIzaSyAVugkioyKP4O199WbPvspI7XwA3iJeLvo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY,
        type:"video"
    }
});



