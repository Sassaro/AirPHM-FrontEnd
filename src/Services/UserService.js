import axios from 'axios'
import {REST_SERVER_URL} from "./Utils"

export class UserService{


    async getUserById(id){
        const response = await axios.get(REST_SERVER_URL + '/usuario/' + id)
        return response.data
    }

    async getUserFriends(id){
        const response = await axios.get(REST_SERVER_URL + '/usuario/' + id + '/amigos')
        return response.data
    }

    async getUserLodgings(id){
        const response = await axios.get(REST_SERVER_URL + '/usuario/' + id + '/publicaciones')
        return response.data
    }

    async getUserComments(id){
        const response = await axios.get(REST_SERVER_URL + '/usuario/' + id + '/comentarios')
        return response.data
    }

    async getUserReservations(id){
        const response = await axios.get(REST_SERVER_URL + '/usuario/' + id + '/reservas-compradas')
        return response.data
    }

    async getUserHistory(id,page){
        const response = await axios.get(REST_SERVER_URL + '/clicks/' + id + '/' + page)
        return response.data
    }

    async removeUserComment(idComentario){
        await axios.delete(REST_SERVER_URL + '/comentario/borrar/' + idComentario)
    }

    async deleteUserFriend(idUser,idFriend){
        await axios.delete(REST_SERVER_URL + '/usuario/' + idUser + '/amigos/eliminar-amigo/' + idFriend)
    }

    async createPublication(id,hospedaje){
        await axios.post(REST_SERVER_URL + '/hospedajes/crear/' + id,hospedaje)
    }

    async login(user){

        const response = await axios.post(REST_SERVER_URL + '/login', user)
        return response.data
    }

    async reserveLodging(reservaDTO){
        await axios.post(REST_SERVER_URL + "/reservarHospedaje",reservaDTO)
    }

    async updateUser(user){
        await axios.patch(REST_SERVER_URL + '/actualizarUsuario', user)
    }

    async crearComentario(idUser, idHospedaje,comentario){
        await axios.post(REST_SERVER_URL + '/comentario/usuario/' + idUser + '/crear-comentario/' + idHospedaje,comentario)
    }

}

export const userService = new UserService()