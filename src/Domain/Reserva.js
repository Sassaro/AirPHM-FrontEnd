export class ReservaDTO{

    idAlojamiento = 0
    fechaDesde = ""
    fechaHasta = ""
    pasajeros = 1
    idUsuario = 0


    constructor(_idAlojamiento = 0, _fechaDesde = "", _fechaHasta = "", _pasajeros = 1, _idUsuario = 0){
        this.idAlojamiento = _idAlojamiento
        this.fechaDesde = _fechaDesde
        this.fechaHasta = _fechaHasta
        this.pasajeros = _pasajeros
        this.idUsuario = _idUsuario
    }

}

