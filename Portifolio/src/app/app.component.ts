// app.component.ts

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None  // Adicione esta linha
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // Seu código do componente
}
