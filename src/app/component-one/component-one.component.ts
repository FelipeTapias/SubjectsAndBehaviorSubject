import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent  {

 Component1Data: string = '';

  constructor(private DataSharing: DataSharingServiceService) {
    this.DataSharing.SharingData.subscribe((res: string) => {
      this.Component1Data = res;
    })
  }

  onSubmit(data) {
    this.DataSharing.SharingData.next(data.value);
  }

}
