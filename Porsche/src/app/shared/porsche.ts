import {Comment} from "./comment";

export class Porsche {
  id!: string;
  name!: string;
  image!: string;
  featured!: boolean;
  label!: string;
  price!: string;
  yearofrelease!: string;
  body!:string;
  color!:string;
  engine!:string;
  description!: string;
  comments!:Comment[];
}
