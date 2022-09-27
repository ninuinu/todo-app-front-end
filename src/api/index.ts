import axios from "axios";

let URL;

if(process.env.REACT_APP_NODE_ENV === 'production'){
    URL = "https://intense-lowlands-11377.herokuapp.com/";
}
else if(process.env.REACT_APP_NODE_ENV === 'development'){
    URL = "http://localhost:8000";
}

export const api = axios.create({
    baseURL: URL,
});