const FilterList = {
  myRating: ["1점", "2점", "3점", "4점", "5점"],
  avgRating: ["1점대", "2점대", "3점대", "4점대", "5점대"],
  status: ["읽은 책", "읽는 중", "읽고 싶은 책"],
  period: ["1개월", "3개월", "1년", "1년 전"],
};

const CardDummy = [
  {
    title: "미움받을 용기",
    description:
      "Check all the substring one by one to see if it has no duplicater.",
    status: "읽은 책",
    myRating: 1,
    avgRating: 3.5,
    bookmark: true,
    created: "1",
  },
  {
    title: "누워서 떡먹기떡먹기떡먹기",
    description: "네카라쿠배 코딩테스트 실전 01번.",
    status: "읽는 중",
    myRating: 3,
    avgRating: 3.5,
    bookmark: false,
    created: "22",
  },
  {
    title: "test",
    description:
      "Check all the substring one by one to see if it has no duplicater Check all the substring one by one to see if it has no duplicater Check all the substring one by one to see if it has no duplicater",
    status: "읽고 싶은 책",
    myRating: 5,
    avgRating: 3.5,
    bookmark: true,
    created: "333",
  },
  {
    title: "Brute Force",
    description:
      "Check all the substring one by one to see if it has no duplicater.",
    status: "Done",
    myRating: 3,
    avgRating: 3.5,
    bookmark: true,
    created: "4444",
  },
  {
    title: "누워서 땅따먹기",
    description: "네카라쿠배 코딩테스트 실전 01번.",
    status: "Doing",
    myRating: 3,
    avgRating: 3.5,
    bookmark: false,
    created: "55555",
  },
];

export { FilterList, CardDummy };
