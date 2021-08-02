import { Component } from '@angular/core';
import { DataSharingServiceService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-component-six',
  templateUrl: './component-six.component.html',
  styleUrls: ['./component-six.component.css']
})
export class ComponentSixComponent {

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
