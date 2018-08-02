import axios from 'axios';

export default {
    //POST string to backened
    stringInputReversal: string => axios.post('api/inputs', string),
    
    //POST URL and method to backened
    URLInput: inputsObj => axios.post('api/inputs/URL', inputsObj)
}