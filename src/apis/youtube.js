import axios from 'axios'

const KEY = 'AIzaSyBKZj-WCpRh13VkO6Ir8yzefPiHEv3F7Vw'

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

