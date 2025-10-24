export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  imageUrl: string;
  grade: number;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  summary: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Coach {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Alumnus {
  id: number;
  name: string;
  graduationYear: number;
  currentTeam: string;
  imageUrl: string;
}
