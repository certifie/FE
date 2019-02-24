import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [NavigationComponent, HomeComponent, NotfoundComponent]
})
export class CoreModule { }
