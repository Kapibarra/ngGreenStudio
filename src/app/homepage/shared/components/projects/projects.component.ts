import { Projects } from './../../interfaces/projects';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions ,Navigation, Autoplay} from 'swiper';
import { ProjectsItems } from '../../interfaces/projectsItems';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };

  projects: Projects[] = [ {
    id: 1,
    name: 'Сканекс',
    photos: [{
id: 1,
image: 'assets/projects/projects01-1.png'
    },
    {
      id: 2,
      image: 'assets/projects/projects01-2.png'
          },
          {
            id: 3,
            image: 'assets/projects/projects01-3.png'
                },
  ]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
