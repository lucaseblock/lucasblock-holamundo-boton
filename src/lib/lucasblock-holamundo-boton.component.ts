import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lucasblock-holamundo-boton',
  template: `
     <button (click)="myFunction()">Click</button>
  `,
  styles: [
  ]
})
export class LucasblockHolamundoBotonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    alert('Hola mundo');
  }

}
