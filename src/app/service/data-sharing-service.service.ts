import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {

  sharingDataBehavior = new BehaviorSubject<string>('Hola');
  sharingDataBehaviorX$ = this.sharingDataBehavior.asObservable();

  SharingData = new Subject();

}
