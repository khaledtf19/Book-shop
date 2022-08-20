import { ReactNode } from "react";

export interface NavItemProps {
  link: string;
  name: string;
}

export interface BackDropProps {
  handleClick: Function;
  children: ReactNode;
}

export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export interface Format {
  "application/x-mobipocket-ebook"?: string;
  "application/epub+zip"?: string;
  "application/rdf+xml"?: string;
  "text/html; charset=utf-8"?: string;
  "application/zip"?: string;
  "text/plain; charset=utf-8"?: string;
  "image/jpeg": string;
  "text/html"?: string;
}

export interface Book {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  translators: string[] | object[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format | any;
  download_count: number;
}
