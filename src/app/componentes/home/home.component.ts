import { Component, OnInit } from '@angular/core';
import { CarItem } from 'src/app/models/Carro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Proyecto2';
  precio: number = 25;
  carros: CarItem[] = [
    {
      modelo: 2022,
      marca: 'Nissan',
      nombre: 'Kicks',
      imagen: 'https://www.autosactual.mx/wp-content/uploads/2016/09/nissan-kicks-mexico-07.jpg',
      descripcion: 'Esta es una camioneta'
    },
    {
      modelo: 2013,
      marca: 'Ferrari',
      nombre: '296-GTB',
      imagen: 'https://cdn.ferrari.com/cms/network/media/img/resize/60d453eae26eb865e634a268?height=750',
      descripcion: 'Este es un carro de carreras'
    },
    {
      modelo: 2022,
      marca: 'VW',
      nombre: 'Jetta',
      imagen: 'https://assets.volkswagen.com/is/image/volkswagenag/vw-jetta-2022-stage-1?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4',
      descripcion: 'Este es un carro VW'
    },
    {
      modelo: 2020,
      marca: 'Kia',
      nombre: 'Rio',
      imagen: 'https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-sd-bn/home/kia-showroom-key-visual-RioSedan_w.jpg',
      descripcion: 'Este es un automóvil Kia Rio'
    },
  ];
  clickBtn() {
    this.title = 'Proyecto2';
    let asd: string = '';
    const carro: CarItem = new CarItem();
    carro.descripcion = null;
    if (asd) {
      console.log('AAA')
    }
  }
  processText(param: number) {
    return param.toString() + '.00'
  }
  deleteCar(i: number) {
    this.carros.splice(i, 1);
  }
}
