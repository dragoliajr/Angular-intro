import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieComponent } from './pie/pie.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PiePicComponent } from './pie-pic/pie-pic.component';

const routes: Routes = [{ path: '', redirectTo: '/hello-world', pathMatch: 'full' },
{path: 'hello-world' ,component: HelloWorldComponent},
{path: 'pie', component: PieComponent}, {path: 'pie-pic', component: PiePicComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
