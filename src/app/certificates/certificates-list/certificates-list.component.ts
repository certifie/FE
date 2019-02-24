import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesListComponent implements OnInit {
  @Input() certificates: any[];

  constructor() { }

  ngOnInit() {
  }

}
