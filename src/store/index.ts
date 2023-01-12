import moment from "moment";
import { BookList, IFilterBooks, KakaoBookInfo } from "src/types";
import create from "zustand";

interface BookStoreType {
  originBookList: BookList[];
  filteredBookList: BookList[];
  bookInfo: KakaoBookInfo;
  filterValue: any;
  // filterValue: {
  //   myRating: {
  //     id: number;
  //     text: string;
  //   };
  //   avgRating: {
  //     id: number;
  //     text: string;
  //   };
  //   status: {
  //     id: number;
  //     text: string;
  //   };
  //   created: {
  //     id: number;
  //     text: string;
  //     date: (string | number)[];
  //   };
  //   bookmark: boolean;
  // };
  setBookInfo: (data: KakaoBookInfo) => void;
  setBooks: (list: BookList[]) => void;
  filterBooks: ({ type, item }: IFilterBooks) => void;
}

export const useBookStore = create<BookStoreType>((set) => ({
  originBookList: [],
  filteredBookList: [],
  filterValue: {
    myRating: { id: 0, text: "없음" },
    avgRating: { id: 0, text: "없음" },
    status: { id: 0, text: "없음" },
    created: { id: 0, text: "없음", date: [0, ""] },
    bookmark: false,
  },
  bookInfo: {
    authors: [],
    contents: "",
    datetime: "",
    isbn: "",
    price: 0,
    publisher: "",
    sale_price: 0,
    status: "",
    thumbnail: "",
    title: "",
    translators: [],
    url: "",
  },

  setBookInfo: (data) => {
    set((state) => ({ ...state, bookInfo: data }));
  },

  setBooks: (list) => {
    set((state) => ({
      ...state,
      originBookList: [...list],
      filteredBookList: [...list],
    }));
  },

  filterBooks: ({ type, item }) => {
    set((state) => {
      const filterVal = state.filterValue;
      filterVal[type] = item;
      return {
        filteredBookList: state.originBookList.filter((data: BookList) => {
          return (
            (filterVal.myRating.id
              ? data.myRating === filterVal.myRating.id
              : true) &&
            (filterVal.avgRating.id
              ? Math.floor(data.avgRating) === filterVal.avgRating.id
              : true) &&
            (filterVal.status.id
              ? data.status === filterVal.status.text
              : true) &&
            (filterVal.created.id
              ? moment(data.created, "YYYY-MM-DD") >=
                moment().subtract(
                  filterVal.created.date[0],
                  filterVal.created
                    .date[1] as moment.unitOfTime.DurationConstructor
                )
              : true) &&
            (filterVal.bookmark ? data.bookmark === filterVal.bookmark : true)
          );
        }),
      };
    });
  },
}));
