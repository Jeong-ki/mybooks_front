const FilterList = {
  myRating: [
    { id: 1, text: "1점" },
    { id: 2, text: "2점" },
    { id: 3, text: "3점" },
    { id: 4, text: "4점" },
    { id: 5, text: "5점" },
  ],
  avgRating: [
    { id: 1, text: "1점대" },
    { id: 2, text: "2점대" },
    { id: 3, text: "3점대" },
    { id: 4, text: "4점대" },
    { id: 5, text: "5점" },
  ],
  status: [
    { id: "done", text: "읽은 책" },
    { id: "doing", text: "읽는 중" },
    { id: "wanted", text: "읽고 싶은 책" },
  ],
  period: [
    { id: "1M", text: "1개월" },
    { id: "3M", text: "3개월" },
    { id: "1Y", text: "1년" },
    { id: "bf_1Y", text: "1년 전" },
  ],
};

const CardDummy = [
  {
    id: 1,
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
    title: "미움받을 용기",
    description:
      "Check all the substring one by one to see if it has no duplicater.",
    status: "읽은 책",
    myRating: 1,
    avgRating: 1.5,
    bookmark: true,
    created: "2022-12-18",
  },
  {
    id: 2,
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
    title: "누워서 떡먹기떡먹기떡먹기",
    description: "네카라쿠배 코딩테스트 실전 01번.",
    status: "읽는 중",
    myRating: 2,
    avgRating: 2.5,
    bookmark: false,
    created: "2022-12-18",
  },
  {
    id: 3,
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
    title: "test",
    description:
      "Check all the substring one by one to see if it has no duplicater Check all the substring one by one to see if it has no duplicater Check all the substring one by one to see if it has no duplicater",
    status: "읽을 책",
    myRating: 3,
    avgRating: 3.5,
    bookmark: false,
    created: "2022-12-18",
  },
  {
    id: 4,
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
    title: "Brute Force",
    description:
      "Check all the substring one by one to see if it has no duplicater.",
    status: "읽은 책",
    myRating: 4,
    avgRating: 4.5,
    bookmark: true,
    created: "2022-12-18",
  },
  {
    id: 5,
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
    title: "누워서 땅따먹기",
    description: "네카라쿠배 코딩테스트 실전 01번.",
    status: "읽는 중",
    myRating: 5,
    avgRating: 5,
    bookmark: false,
    created: "2022-12-18",
  },
];

export { FilterList, CardDummy };
