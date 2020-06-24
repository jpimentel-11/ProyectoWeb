import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appcurso';
  items = ['nicolas', 'julian', 'perez'];

  products: Product[] = [
    {
      id: '1',
      title: 'Cadena de 14 kilates',
      image: 'assets/imagens/objeto1.jpg',
      price: 8000,
      description: 'bla bla bla'
    },
    {
      id: '2',
      title: 'Cadena de 10 kilates',
      image: 'assets/imagens/objeto2.jpg',
      price: 9000,
      description: 'bla bla bla'
    },
    {
      id: '3',
      title: 'Cadena de plata',
      image: 'assets/imagens/objeto3.webp',
      price: 5000,
      description: 'bla bla bla'
    },
    {
      id: '4',
      title: 'Aretes kilates',
      image: 'assets/imagens/objeto4.jpg',
      price: 9000,
      description: 'bla bla bla'
    },
    {
      id: '5',
      title: 'Aretes QWE-123',
      image: 'assets/imagens/objeto5.jpg',
      price: 9000,
      description: 'bla bla bla'
    },
    {
      id: '6',
      title: 'Aretes 00-23AD',
      image: 'assets/imagens/objeto6.webp',
      price: 9000,
      description: 'bla bla bla'
    }
  ]

  addItem() {
    this.items.push('nuevo item');
  }


  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
   console.log('componente padre');
   console.log(id);
  }
}
