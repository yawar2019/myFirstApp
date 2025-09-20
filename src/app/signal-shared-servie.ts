import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalSharedServie {
  message=signal<string>('Trinath');
  gerMessage()
  {
    return this.message;
  }
  setMessage(value:string)
  {
    this.message.set(value);
  }
}
