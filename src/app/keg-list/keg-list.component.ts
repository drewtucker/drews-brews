import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent{

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByAlcohol: string;

  onChange(optionFromMenu)
  {
    if(optionFromMenu === "strongerKegs")
    {
      this.filterByAlcohol = "strongerKegs";
    }
    else if(optionFromMenu === "weakerKegs")
    {
      this.filterByAlcohol = "weakerKegs";
    }
    else
    {
      this.filterByAlcohol = "allKegs";
    }
  }

  sellPint(currentKeg)
  {
    currentKeg.pints --;
  }

  sellGrowler(currentKeg)
  {
    currentKeg.pints -= 2;
  }



  editButtonClicked(kegToEdit: Keg)
  {
    this.clickSender.emit(kegToEdit);
  }

  alcoholColor(currentKeg)
  {
    if(currentKeg.alcoholContent <= 5)
    {
      return "text-success";
    }
    else if(currentKeg.alcoholContent <= 7)
    {
      return "text-warning";
    }
    else if(currentKeg.alcoholContent >= 9)
    {
      return "text-danger";
    }
  }

}
