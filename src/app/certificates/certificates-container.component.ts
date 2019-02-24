import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CertificatesService} from './certificates.service';

@Component({
  selector: 'app-notes',
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
