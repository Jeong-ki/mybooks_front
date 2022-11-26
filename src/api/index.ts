import axios from "axios";

export const getSearchResult = (value: string): Promise<any> =>
  axios({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book", // title, authors
    params: { query: value },
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_SEARCH}`,
      "Content-Type": "application/json;charset=UTF-8",
    },
  }).then((res) => res.data.documents);
