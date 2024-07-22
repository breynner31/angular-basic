import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-recuadros',
  templateUrl: './recuadros.component.html',
  styleUrls: ['./recuadros.component.scss']
})
export class RecuadrosComponent implements OnInit {
  columns: string[] = []; // Array de columnas
  currentPosition = {x: 0 , y: 0};
  collisionSubject = new BehaviorSubject<boolean>(false);
  selectedIndex: number | null = null; // Índice del recuadro seleccionado
  selectedColor: string = '#ffffff'; // Color seleccionado por defecto



  constructor(private PositionService : PositionService) { }
  

  ngOnInit(): void {
    this.columns = this.generateColumns(9); // Generar 9 columnas predeterminadas
    this.PositionService.position$.subscribe(position => {
      this.currentPosition = position;
      this.updateCoveredColumns();
    });
  }
  


  // Método para generar columnas
  generateColumns(count: number): string[] {
    const cols = [];
    for (let i = 1; i <= count; i++) {
      cols.push(` `);
    }
    return cols;
  }

  isCovered(index: number): boolean {
    const col = Math.floor(this.currentPosition.x / 110);
    const row = Math.floor(this.currentPosition.y / 110);
    const coveredIndex = row * 3 + col;
    return index === coveredIndex;

  }

  updateCoveredColumns(): void {
    let isTouchingAny = false;
    this.columns.forEach((_, index) => {
      if (this.isCovered(index)) {
        isTouchingAny = true;
      }
    });
    this.collisionSubject.next(isTouchingAny);
  }

  selectRecuadro(index: number): void {
    this.selectedIndex = index; // Actualiza el índice del recuadro seleccionado
    this.selectedColor = this.columns[index]; // Carga el color actual del recuadro seleccionado
  }

  applyColor(): void {
    if (this.selectedIndex !== null) {
      this.columns[this.selectedIndex] = this.selectedColor; // Actualiza el color del recuadro seleccionado
    }
  }

}
