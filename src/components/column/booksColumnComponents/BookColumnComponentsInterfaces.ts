import { Person } from "../../../interfaces";

export interface BookImageColProps {
  imgUrl: string;
  name: string;
}

export interface BookTitleColProps {
  title: string;
  authors: Person[];
}
