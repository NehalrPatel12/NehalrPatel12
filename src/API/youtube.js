import axios from 'axios';

const KEY = 'AIzaSyAHkQ8wyakTKU0z5L8yJiDOoWHrg2cSiGA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'videos',
        maxResults: 10,
        key: KEY
    }
});