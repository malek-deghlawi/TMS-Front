import { Categorie } from "./Categorie";
import { SubTask } from "./SubTask";
import { User } from "./User";

export class Task {
  id: string;
  description: string;
  deadline: string;
  end_falg: boolean;
  publisher:User;
  categories:Categorie[];
  assigen_to:User[];
  sub_task:SubTask[];
  constructor(description:string,deadline:string,categories:[],assigen_to:[]) {
    this.id="not set";
    this.description=description;
    this.deadline=deadline;
    this.end_falg=false;
    this.categories=categories;
    this.assigen_to=assigen_to;
  }
}
