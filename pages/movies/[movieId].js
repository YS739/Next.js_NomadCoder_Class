import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  return <div>{router.query.title || "Loading..."}</div>;
};

export default Detail;
