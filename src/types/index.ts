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

export interface StoreSetBookDetail {
  setBookDetail: (book: KakaoBookInfo) => void;
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
