import {Routes} from '@angular/router';
import {TableView, VehiculosView, CiudadesView, NotFoundView} from '@Views'

export const ViewRoutes : Routes = [

    {path: '', component: TableView},
    {path: 'vehiculos', component: VehiculosView},
    {path: 'ciudades', component: CiudadesView},
    {path: '**', component: NotFoundView}
]
