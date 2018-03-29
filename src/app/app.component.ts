import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Drew's Brews";
  selectedKeg = null;


  masterKegList: Keg[] = [
    new Keg("Wud Light", "WudBeiser", 3, 5, 124),
    new Keg("Olly's Old-Fashioned Lager", "Awful Olly's Brewery", 5, 6.5, 124),
    new Keg("Shmeineken", "Shmeineken Brewing Co.", 4, 5.5, 124),
    new Keg("Positively Putrid Porter", "Ted's Garage Brewery", 7, 8.6, 124),
    new Keg("Newe English 40oz", "40's 4 Days", 2, 9, 124)
  ]

  finishedEditing()
  {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg)
  {
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKeg: Keg)
  {
    this.masterKegList.push(newKeg);
  }



}
