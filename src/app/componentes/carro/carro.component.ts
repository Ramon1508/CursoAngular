import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarItem } from 'src/app/models/Carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {
  @Input() carro: CarItem | null = null;
  @Output() deleteCar: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  deleteme() {
    this.deleteCar.emit()
  }
}
