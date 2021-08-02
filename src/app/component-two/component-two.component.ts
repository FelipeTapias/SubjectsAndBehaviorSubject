import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent  {

  Component2Data: string = '';


  constructor(private DataSharing: DataSharingServiceService) {
    this.DataSharing.SharingData.subscribe((res: string) => {
      this.Component2Data = res;
    })
  }

  onSubmit(data) {
    this.DataSharing.SharingData.next(data.value);
  }

}
