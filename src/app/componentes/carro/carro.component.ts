import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarItem } from 'src/app/models/Carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() carro: CarItem | null = null;
  @Output() deleteCar: EventEmitter<any> = new EventEmitter();
  subs: Subscription | null = null;
  constructor() {
    this.subs = this.deleteCar.subscribe(res => {

    });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
  ngAfterViewInit(): void {
    console.log('Run ngAfterViewInit...');
    console.log(this.carro);
  }
  ngAfterContentInit(): void {
    console.log('Run ngAfterContentInit...');
    console.log(this.carro);
  }
  ngOnInit(): void {
    console.log('Run ngOnInit...');
    console.log(this.carro);
  }
  deleteme() {
    this.deleteCar.emit()
  }
}
