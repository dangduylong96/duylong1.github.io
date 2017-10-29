import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailProComponent } from '../detail-pro/detail-pro.component'
const routerConfig=[
    {path:"home", component: HomeComponent},
    {path:"detail",component: DetailProComponent},
    {path:"",redirectTo:"/home",pathMatch:"full"}
]
@NgModule({
    imports:[RouterModule.forRoot(routerConfig)],
    declarations:[
    ],
    exports: [RouterModule]
})
export class appRoutingModule{}