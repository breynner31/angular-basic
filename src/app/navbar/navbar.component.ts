import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedColor: string = '#f0f0f0';
  selectedColor2: string ='#000000';
  invisible : boolean = true;


  // el constructor de una clase se utiliza para inyectar dependencias y realizar inicializaciones necesarias
  constructor(/*aqui inyectamos una instancia del servicio*/private ColorService:ColorService) { }


  onColorChange(event:Event) : void {
    // el evento se disparó a partir de un cambio en un campo de entrada imput
    const input = event.target as HTMLInputElement;
    this.ColorService.setColor(input.value);
  }
  onColorChange2(event:Event) : void {
    const input = event.target as HTMLInputElement;
    this.ColorService.setcolor2(input.value);
  }

  toggleVisibility() : void {
    this.invisible  =! this.invisible ;
  }



  ngOnInit(): void {
  }

  x :number = 3;
  y :number=  3;

}
