import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-cuadro-principal',
  templateUrl: './cuadro-principal.component.html',
  styleUrls: ['./cuadro-principal.component.scss']
})
export class CuadroPrincipalComponent implements OnInit {
  color: string = '#ffffff'; // Color inicial por defecto
  color2: string ='#000000';

  constructor(private ColorService: ColorService) {}

  ngOnInit(): void {
    this.ColorService.color$.subscribe(color => {
      this.color = color;
      this.updateColor();
    });

    this.ColorService.color2$.subscribe(color2 => {
      this.color2 = color2;
      this.updateColor2();
    });
  }

  updateColor2() : void {
    const element = document.querySelector('.column2');
    if (element) {
      (element as HTMLElement).style.backgroundColor = this.color2;
    }
  }

  updateColor() : void {
    const element = document.querySelector('.large-box');
    if (element) {
      (element as HTMLElement).style.backgroundColor = this.color;
    }
  }


}