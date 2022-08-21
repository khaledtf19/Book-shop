import { Person } from "../../../interfaces";

export interface BookImageColProps {
  imgUrl: string;
  name: string;
}

export interface BookTitleColProps {
  id: number;
  title: string;
  authors: Person[];
}
