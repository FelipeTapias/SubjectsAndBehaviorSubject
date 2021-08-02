import { Component } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';


@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.css']
})
export class ComponentFiveComponent {

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
