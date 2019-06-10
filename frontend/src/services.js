import axios from 'axios';
import { API_URL, MAILCHAMP_URL } from './config';


export function getGalleryImages() {
    return axios.get(API_URL + 'gallery/images/').then(r => r.data);
}

export function getConstantText(key) {
    return axios.get(API_URL + `constant/elements/${key}/`).then(r => r.data.text);
}

export function addContractEmail(email) {
    return axios.post(MAILCHAMP_URL, {'EMAIL': email}).then(r => {
        console.log(r);
        return r;
    })
}