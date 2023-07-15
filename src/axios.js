import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-b74be.cloudfunctions.net/api'
  //'http://127.0.0.1:5001/clone-b74be/us-central1/api' 
});

export default instance;

