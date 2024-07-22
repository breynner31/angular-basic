import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

// aqui aplique los formularios reactivos =es el estado de la aplicacion con respecto al valor de los datos sobre cada componente
// esto cambia mediante los usuarios interactuen
export class ColorService {
  // se manejara el color y se iniciara con el color respectivo #f0f0f0
  private colorSubject = new BehaviorSubject<string>('#f0f0f0');
  private colorSubject2 = new BehaviorSubject<string>('#000000');
  //se expone el valor colorSubject para q otros componentes y servicios tenga el cambio de color
  color$ = this.colorSubject.asObservable();
  color2$ = this.colorSubject2.asObservable();
  // ste método permite a otros componentes o servicios actualizar el color. 
  setColor(color: string) : void{
    this.colorSubject.next(color);
  }

  setcolor2(color2: string) :void {
    this.colorSubject2.next(color2);
  }

}
