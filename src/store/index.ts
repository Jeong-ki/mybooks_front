import moment from "moment";
import { BookList, IFilterBooks, KakaoBookInfo } from "src/types";
import create from "zustand";

export const useBookStore = create((set) => ({
  originBookList: [],
  filteredBookList: [],
  filterValue: {
    myRating: { id: 0, text: "없음" },
    avgRating: { id: 0, text: "없음" },
    status: { id: 0, text: "없음" },
    created: { id: 0, text: "없음", date: [0, ""] },
    bookmark: false,
  },

  setBooks: (list: BookList[]) => {
    set({ originBookList: [...list], filteredBookList: [...list] });
  },

  filterBooks: ({ type, item }: IFilterBooks) => {
    set((state: { filterValue: any; originBookList: never[] }) => {
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
