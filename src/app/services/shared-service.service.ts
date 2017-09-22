import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  // Observable string sources
  private loginStatus = new Subject<boolean>();
  // Observable string streams
  loginStatus$ = this.loginStatus.asObservable();
  // Service message commands
  emitLoginStatus(change: boolean) {
    this.loginStatus.next(change);
  }
}
