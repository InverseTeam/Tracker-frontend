import axios from "axios";

const token = localStorage.getItem("token");

const BASE_URL = 'https://inverse-tracker.ru/api';

export const instanceLogged = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: `Token ${token}` }, //Переделать
  // headers: { Authorization: "Token db87a3d921c5f19f4367c808a85287d0f82cd258" }, //Переделать
});

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});