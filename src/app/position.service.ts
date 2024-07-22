import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positionSubject = new BehaviorSubject<{ x: number, y: number }>({ x: 0, y: 0 });
  position$ = this.positionSubject.asObservable();

  setPosition(position: { x: number, y: number }): void {
    this.positionSubject.next(position);
  }
}
