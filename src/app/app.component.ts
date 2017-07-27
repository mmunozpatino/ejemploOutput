import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tituloP = 'titulo que manda el padre';
  bl: boolean;
  emitir(b: boolean){
    this.bl = b;
  }
}
