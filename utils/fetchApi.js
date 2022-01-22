import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '26dd9638bamsh2bd9ae09fbc9484p18f0ccjsn77233de1fb11'
          }
    })
    return data;
}