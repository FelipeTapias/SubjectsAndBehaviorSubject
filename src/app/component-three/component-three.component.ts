import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent {

  Component3Data: string = '';

  constructor(private DataSharing: DataSharingServiceService) {
    this.DataSharing.SharingData.subscribe((res: string) => {
      this.Component3Data = res;
    })
  }

  onSubmit(data) {
    this.DataSharing.SharingData.next(data.value);
  }

}
