import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MaterialModule } from 'src/app/material.module';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

const homeRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add/:id', component: AddComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
