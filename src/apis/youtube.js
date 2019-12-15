import axios from 'axios';

const KEY = 'AIzaSyDSVcI3wtqTKearLgBcabkduS5wMrvX0Hc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY,
        type:"video"
    }
});



