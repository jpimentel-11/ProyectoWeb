import {
    Component,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';



@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements DoCheck, OnInit, OnDestroy{

    @Input() product: Product;
    @Output() productClicked: EventEmitter <any> = new EventEmitter();
    today = new Date();
    constructor(){
        console.log('1-constructor');
    }

   /* ngOnChanges(changes: SimpleChanges) {
        console.log('2-onChanges');
        console.log(changes);
    }*/

    ngOnInit() {
        console.log('3-ngOnInit');
    }
    ngDoCheck(){
        console.log('4-ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5-ngOnDestroy');
    }

    addCart() {
        console.log('se agrego al carrito (componente hijo)');
        this.productClicked.emit(this.product.id);
    }

}