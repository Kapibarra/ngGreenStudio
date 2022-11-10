import { Services } from './../../interfaces/services';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
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

  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    breakpoints: {
      '768': {
        slidesPerView: 2.5,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
