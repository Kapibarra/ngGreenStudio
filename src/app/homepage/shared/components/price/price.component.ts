import { Price } from './../../interfaces/price';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  prices: Price[] = [
    {
      title: 'Выезд специалиста',
      price: 'от 3000 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
    {
      title: 'обработка и лечение',
      price: 'от 500 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
    {
      title: 'внесение удобрений',
      price: 'от 3000 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
    {
      title: 'Создание композиции',
      price: 'от 2000 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
    {
      title: 'обслуживание',
      price: 'от 12500 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
    {
      title: 'обработка и лечение',
      price: 'от 500 ₽',
      description:
        'Консультация, диагностика, первичная обработка и рекомендации по уходу',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
