import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {CertificatesContainerComponent} from './certificates-container.component';
import {AddCertificateComponent} from './add/add-certificate.component';
import {CertificatesListComponent} from './certificates-list/certificates-list.component';
import {CertificatesRoutingModule} from './certificates-routing.module';
import { CertificateComponent } from './certificates-list/certificate/certificate.component';

@NgModule({
  declarations: [
    CertificatesContainerComponent,
    AddCertificateComponent,
    CertificatesListComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CertificatesRoutingModule
  ],
  providers: []
})
export class CertificatesModule { }
