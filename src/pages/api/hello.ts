// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const dummy: any = [
  {
    a: 10,
    b: 20,
  },
  {
    c: 30,
    d: 40,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(dummy);
}
