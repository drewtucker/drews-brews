import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg-form',
  templateUrl: './new-keg-form.component.html',
  styleUrls: ['./new-keg-form.component.css']
})
export class NewKegFormComponent {

  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcoholContent: string)
  {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent));
    this.sendKeg.emit(newKeg);
  }


}
