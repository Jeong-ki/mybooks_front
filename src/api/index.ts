import axios from "axios";

export const getSearchResult = (value: string, pageNum = 1) =>
  axios({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book", // title, authors
    params: { query: value, page: pageNum, size: 15 },
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_SEARCH}`,
      "Content-Type": "application/json;charset=UTF-8",
    },
  }).then((res) => res.data);
