export class Hospedaje{

    id = -1
    promedioPuntaje = 0
    cantidadPuntajes = 0
    urlImagen = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
    ubicacion = {
        pais: "",
        provincia: "",
        ciudad: "",
        direccion: ""
    }
    costoNoche = 1
    nombre = ""
    descripcion = ""
    alojamientoDescripcion = ""
    cantidadHuespedes = 1
    tieneServiciosLimpieza = false
    cantidadDormitorios = 1
    cantidadBanios = 1
    comentarios = []
    comodidades = []
    tipo = "Casa"

    constructor(){
        
    }
}


export class HospPageList {

    content = []
    empty = false
    first = false
    last = false
    number = 0
    numberOfElements = 12

}