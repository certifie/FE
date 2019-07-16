import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CertificatesService} from '../certificates.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss']
})
export class AddCertificateComponent implements OnInit {
  public createCertificateForm: FormGroup;
  
  constructor(private certificatesSvc: CertificatesService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.createCertificateForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      authority: new FormControl('')
    });
  }

  public onSubmit(): void {
    const data = this.createCertificateForm.getRawValue();
    this.certificatesSvc.postCertificate(data)
      .subscribe(() => this.router.navigate(['/certificates']));
  }

}
