export class FormViaje{

    paisOrigenId?: number
    paisDestinoId?: number
    ciudadOrigenId?: number
    ciudadDestinoId?: number
    tipoVehiculoId?: number
    vehiculoId?: number
    fechaInicio?: string

    constructor(
        paisOrigen,
        paisDestino,
        ciudadOrigen,
        ciudadDestino,
        tipoVehiculo,
        vehiculo,
        fechaInicio
    ){
        this.paisOrigenId = paisOrigen;
        this.paisDestinoId = paisDestino;
        this.ciudadOrigenId = ciudadOrigen;
        this.ciudadDestinoId = ciudadDestino;
        this.tipoVehiculoId = tipoVehiculo;
        this.vehiculoId = vehiculo;
        this.fechaInicio = fechaInicio == '' ? undefined : fechaInicio;
    }

}