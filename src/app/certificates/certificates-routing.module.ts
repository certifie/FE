import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCertificateComponent} from './add/add-certificate.component';
import {CertificatesContainerComponent} from './certificates-container.component';

const routes: Routes = [
  {
    path: '',
    component: CertificatesContainerComponent
  },
  {
    path: 'add',
    component: AddCertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule { }
