import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateComponent implements OnInit {
  @Input() certificate;

  constructor() { }

  ngOnInit() {
  }

}
