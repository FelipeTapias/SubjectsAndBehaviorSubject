import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';


@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.css']
})
export class ComponentFourComponent {

  Component1Data: string = '';

  constructor(private DataSharing: DataSharingServiceService) {
    this.DataSharing.sharingDataBehaviorX$.subscribe((res: string) => {
      this.Component1Data = res;
    })
  }

  onSubmit(data) {
    this.DataSharing.sharingDataBehavior.next(data.value);
  }

}
