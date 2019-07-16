import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CertificatesService} from './certificates.service';

@Component({
  selector: 'app-certificates-container',
  templateUrl: './certificates-container.component.html',
  styleUrls: ['./certificates-container.component.scss']
})
export class CertificatesContainerComponent implements OnInit {
  public certificates$: Observable<any>;

  constructor(private certificatesSvc: CertificatesService) { }

  ngOnInit() {
    this.getAllCertificates();
  }

  private getAllCertificates(): void {
    this.certificates$ = this.certificatesSvc.getCertificates();
  }

}
