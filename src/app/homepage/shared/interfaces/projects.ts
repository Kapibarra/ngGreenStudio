import { ProjectsItems } from './projectsItems';
export class Projects {
    id: number;
    name: string;
    photos: ProjectsItems[]= [];
    constructor(projects: Projects) {
        this.id = projects.id;
        this.name = projects.name;
        this.photos = projects.photos
    }
}