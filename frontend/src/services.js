import axios from "axios";
import cookie from "react-cookies";

import { API_URL, MAILCHAMP_URL } from "./config";

export function getGalleryImages() {
  return axios.get(API_URL + "gallery/images/").then(r => r.data);
}

export function getConstantText(key) {
  return axios.get(API_URL + `constant/elements/${key}/`).then(r => r.data);
}

export function addContractEmail(email) {
  return axios.post(MAILCHAMP_URL, { EMAIL: email }).then(r => {
    return r;
  });
}

export function getTeamMembers() {
  return axios.get(API_URL + "team/members/").then(r => r.data);
}

export function getWeapons() {
  return axios.get(API_URL + "weapons/").then(r => r.data);
}

export function getLinks() {
  return axios.get(API_URL + "constant/elements/links/").then(r => r.data);
}

export function sendMessage(author, email, message) {
  const headers = {
    "X-CSRFTOKEN": cookie.load('csrftoken'),
  };

  return axios.post(API_URL + "contact/", {author: author, email: email, message: message}, {headers: headers})
    .then(r => r.status === 201)
}