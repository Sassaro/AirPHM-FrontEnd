/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import {REST_SERVER_URL} from "./Utils"

export class HospService {

    async getHosps(requestData) {

        const response = await axios.post(REST_SERVER_URL + '/hospedajes',requestData)
        return response.data
        
    }

    async getHospsById(id){
        const response = await axios.get(REST_SERVER_URL + '/hospedajes/' + id)
        return response.data
    }

    async deleteLodging(id){
        await axios.delete(REST_SERVER_URL + "/hospedajes/eliminar/" + id)
    }
    
    async saveClickLog(requestData){
        const response = await axios.post(REST_SERVER_URL + "/clickLogger/create", requestData)
        return response.data
    }

    async getHospsFriends(idUsuario,paginado){
        const response = await axios.post(`${REST_SERVER_URL}/hospedajes/de-amigos/${idUsuario}`,paginado)
        return response.data
    }
}

export const hospService = new HospService()