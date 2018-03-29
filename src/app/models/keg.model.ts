export class Keg
{
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pints: number = 124)
  {
  }

  alcoholColor()
  {
    if(this.alcoholContent >= 5)
    {
      return "text-success";
    }
    else if(this.alcoholContent >= 7)
    {
      return "text-warning";
    }
    else if(this.alcoholContent >= 9)
    {
      return "text-danger";
    }
  }


  

}
