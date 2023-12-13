import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3443cafb2d8c7a1c8087dec65df0671e665b6c84d97ae426a46617f56ce5881c'
  }
});
