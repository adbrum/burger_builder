import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://react-my-burger-3b1e6.firebaseio.com/\n'
})

export default instance