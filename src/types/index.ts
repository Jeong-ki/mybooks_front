export interface BookList {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  status: string;
  myRating: number;
  avgRating: number;
  bookmark: boolean;
  created: string;
}

// Store Book Type
export interface IBookstore {
  originBookList: BookList[];
  filteredBookList: BookList[];
  filterValue: {
    myRating: { id: number; text: string };
    avgRating: { id: number; text: string };
    status: { id: number; text: string };
    created: { id: number; text: string; date: [number, string] };
    bookmark: boolean;
  };
}

export interface IFilterBooks {
  type: string;
  item: { id: number; text: string; date?: [number, string] } | boolean;
}

export interface StoreFilterBooks {
  filterBooks: ({ type, item }: IFilterBooks) => void;
}

export interface StoreSetBooks {
  setBooks: (list: BookList[]) => void;
}

export interface StoreFilteredBookList {
  filteredBookList: never[];
}

export interface Ifilter {
  title: string;
  type: string;
  items: { id: number; text: string }[];
}

// KAKAO Book API Type
export interface KakaoBookInfo {
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
export interface KakaoResponse {
  books: KakaoBookInfo[];
  isEnd: boolean;
  nextPage: number;
  total: number;
}
export interface BookApiError {
  code: string;
  message: string;
}
