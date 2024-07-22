import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadroPrincipalComponent } from './cuadro-principal/cuadro-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecuadrosComponent } from './recuadros/recuadros.component';
import { CuadroMovimientoComponent } from './cuadro-movimiento/cuadro-movimiento.component';
import { ColorService } from './color.service';
import { PositionService } from './position.service';
@NgModule({
  declarations: [
    AppComponent,
    CuadroPrincipalComponent,
    NavbarComponent,
    RecuadrosComponent,
    CuadroMovimientoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ColorService, PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
