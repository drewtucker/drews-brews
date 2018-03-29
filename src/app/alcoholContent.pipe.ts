import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "alcoholContentPipe",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {
  transform(input: Keg[], desiredAlcohol)
  {
    var output: Keg[] = [];
    if(desiredAlcohol === "strongerKegs")
    {
      for(var i = 0; i < input.length; i++)
      {
        if(input[i].alcoholContent >= 7)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredAlcohol === "weakerKegs")
    {
      for(var i = 0; i < input.length; i++)
      {
        if(input[i].alcoholContent < 7)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else
    {
      return input;
    }

  }
}
