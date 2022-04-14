import axios from  "axios";


const instance = axios.create({
    baseURL: 'https://fir-d53c2-default-rtdb.firebaseio.com//AIzaSyBL3utIJkTRG-Fat80Ehqr4bczI4g6Wiss'

    
});
 

export default instance;