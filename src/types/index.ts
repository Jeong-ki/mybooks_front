export interface BookList {
  data: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    status: string;
    myRating: number;
    avgRating: number;
    bookmark: boolean;
    created: string;
  }[];
}

export interface BookInfo {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface BookApiError {
  code: string;
  message: string;
}
