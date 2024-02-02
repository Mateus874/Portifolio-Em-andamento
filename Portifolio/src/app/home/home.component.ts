import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //Uso do ngModel para passar o input para a propriedade
Nome: string[] = [];
Email: string[] = [];
Texto: string[] = [];
  

}
