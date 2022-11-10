import { Services } from './../../interfaces/services';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  config: SwiperOptions = {
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    // scrollbar: { draggable: true },
  };
  services: Services[] = [
    {
      title: 'Крупномерные растения',
      image: 'assets/services/service01.png',
    },
    {
      title: 'Вертикальное озеленение ',
      image: 'assets/services/service01.png',
    },
    {
      title: 'подвесные композиции',
      image: 'assets/services/service01.png',
    },
    {
      title: 'Настольные композиции',
      image: 'assets/services/service01.png',
    },
    {
      title: 'ФЛОРАРИУМЫ',
      image: 'assets/services/service01.png',
    },
    {
      title: 'интерьерные букеты',
      image: 'assets/services/service01.png',
    },
    {
      title: 'Перегородки из растений',
      image: 'assets/services/service01.png',
    },
    {
      title: 'фитостена',
      image: 'assets/services/service01.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
