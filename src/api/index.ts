import axios from "axios";

export const fetchBookList = async (bookName: string, pageParam: number) => {
  const res = await axios.get("https://dapi.kakao.com/v3/search/book", {
    params: {
      query: bookName,
      page: pageParam,
      size: 15,
    },
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_SEARCH}`,
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return {
    books: res.data.documents,
    nextPage: pageParam + 1,
    idEnd: res.data.meta.is_end,
    total: res.data.meta.total_count,
  };
};
