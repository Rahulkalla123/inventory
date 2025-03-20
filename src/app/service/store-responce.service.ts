import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreResponceService {
  
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();


  setItemsData(items: any[]) {
    this.itemsSubject.next(items);
  }

  // Get item data
  getItemsData(): any[] {
    return this.itemsSubject.value;
  }

}
