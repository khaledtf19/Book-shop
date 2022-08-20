import { Person } from "../../../interfaces";

export interface BookImageProps {
  imgUrl: string;
  name: string;
}

export interface BookTitleProps {
  title: string;
  authors: Person[];
}
