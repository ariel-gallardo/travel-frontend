export class FormViaje{

    ciudadOrigenId?: number
    ciudadDestinoId?: number
    vehiculoId?: number
    fechaInicio?: string

    constructor(
        ciudadOrigen,
        ciudadDestino,
        vehiculo,
        fechaInicio
    ){
        this.ciudadOrigenId = ciudadOrigen;
        this.ciudadDestinoId = ciudadDestino;
        this.vehiculoId = vehiculo;
        this.fechaInicio = fechaInicio == '' ? undefined : fechaInicio;
    }

}