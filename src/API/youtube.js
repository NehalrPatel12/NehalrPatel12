import axios from 'axios';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'videos',
        maxResults: 10,
        key: KEY
    }
});