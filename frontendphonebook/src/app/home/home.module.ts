import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from '../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        MatTableModule,
        AngularMaterialModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
