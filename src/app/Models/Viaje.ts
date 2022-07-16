import {Vehiculo} from "./"

export interface Viaje{
    id: number
    paisOrigen : string 
    paisDestino : string
    ciudadOrigen : string
    ciudadDestino : string
    fechaInicio : string
    fechaFin  : string
    vehiculoAsignado : Vehiculo
    estadoViaje : string
}