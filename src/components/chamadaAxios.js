import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function inscreverSe(body){
	const request = axios.post(`${BASE_URL}/auth/login`, body);
	return request;
}

function registro(body){
	const request = axios.post(`${BASE_URL}/auth/sign-up`, body);
	return request;
}

function criarHabito(body, config){
	const request = axios.post(`${BASE_URL}/habits`, body, config);
	return request;
}

function listarHabitos(config){
	const request = axios.get(`${BASE_URL}/habits`, config);
	return request;
}

function deletarHabito(id, config){
	const request = axios.delete(`${BASE_URL}/habits/${id}`, config);
	return request;
}

function meusHabitosDiarios(config){
	const request = axios.get(`${BASE_URL}/habits/today`, config);
	return request;
}

function habitoFeito(id, config){
	const request = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
	return request;
}

function habitoParaFazer(id, config){
	const request = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
	return request;
}

export {inscreverSe, registro, criarHabito, listarHabitos, deletarHabito, meusHabitosDiarios, habitoFeito, habitoParaFazer};