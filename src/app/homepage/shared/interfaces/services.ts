export class Services {
  title: string;
  image: string;
  constructor(service: Services) {
    this.title = service.title;
    this.image = service.image;
  }
}
