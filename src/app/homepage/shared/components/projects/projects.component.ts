import { Projects } from './../../interfaces/projects';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { ProjectsItems } from '../../interfaces/projectsItems';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '768': {
        slidesPerView: 2.5,
      },
    },
  };

  projects: Projects[] = [
    {
      id: 1,
      name: 'Сканекс',
      photos: [
        {
          id: 1,
          image: 'assets/projects/projects01-1.png',
        },
        {
          id: 2,
          image: 'assets/projects/projects01-2.png',
        },
        {
          id: 3,
          image: 'assets/projects/projects01-3.png',
        },
      ],
    },
    {
      id: 2,
      name: 'Технопарк',
      photos: [
        {
          id: 1,
          image: 'assets/projects/projects02-1.png',
        },
        {
          id: 2,
          image: 'assets/projects/projects02-2.png',
        },
        {
          id: 3,
          image: 'assets/projects/projects02-3.png',
        },
        {
          id: 4,
          image: 'assets/projects/projects02-4.png',
        },
        {
          id: 5,
          image: 'assets/projects/projects02-5.png',
        },
      ],
    },
    {
      id: 3,
      name: 'офис IT',
      photos: [
        {
          id: 1,
          image: 'assets/projects/projects03-1.png',
        },
        {
          id: 2,
          image: 'assets/projects/projects03-2.png',
        },
        {
          id: 3,
          image: 'assets/projects/projects03-3.png',
        },
        {
          id: 4,
          image: 'assets/projects/projects03-4.png',
        },
      ],
    },
    {
      id: 4,
      name: 'Алвилс',
      photos: [
        {
          id: 1,
          image: 'assets/projects/projects04-1.png',
        },
        {
          id: 2,
          image: 'assets/projects/projects04-2.png',
        },
        {
          id: 3,
          image: 'assets/projects/projects04-3.png',
        },
        {
          id: 4,
          image: 'assets/projects/projects04-4.png',
        },
        {
          id: 5,
          image: 'assets/projects/projects04-5.png',
        },
        {
          id: 6,
          image: 'assets/projects/projects04-6.png',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
