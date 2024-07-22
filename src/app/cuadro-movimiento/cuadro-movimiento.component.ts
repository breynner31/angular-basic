import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';


@Component({
  selector: 'app-cuadro-movimiento',
  templateUrl: './cuadro-movimiento.component.html',
  styleUrls: ['./cuadro-movimiento.component.scss']
})
export class CuadroMovimientoComponent implements OnInit {

  position = { x: 0 , y: 0};

  readonly rows = 5; // Número de filas
  readonly columns = 5; // Número de columnas

  constructor( private PositionService: PositionService  ) { }

  ngOnInit(): void {
    this.PositionService.position$.subscribe(position => {
      this.position = position;
      this.checkPosition();
    });
  }

  move(direction: string): void {
    const step = 180.5; // mover 10px cada paso
    switch(direction){
      case 'up':
        this.position.y -= step;
        break;
      case 'down':
        this.position.y +=  step;
        break;
      case 'left':
        this.position.x -= step;
        break;
      case 'right':
        this.position.x += step;
        break;
    }
    this.PositionService.setPosition(this.position);
  }

  checkPosition(): void {
    const maxX = (this.columns - 1) * 110; // Límite máximo en x basado en número de columnas
    const maxY = (this.rows - 1) * 100; // Límite máximo en y basado en número de filas

    // Verifica si el cuadro está fuera de los límites
    if (this.position.x < 0 || this.position.x > maxX || this.position.y < 0 || this.position.y > maxY) {
      this.resetPosition(); // Reinicia la posición si está fuera de límites
    }
  }
  resetPosition(): void {
    this.position = { x: 0, y: 0 }; // Restablece la posición al inicio
    this.PositionService.setPosition(this.position); // Notifica la nueva posición
  }

}
