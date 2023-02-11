import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  // 시크릿 모드에서 디테일로 들어가면 백엔드(서버)에서는 아직 배열이 아니기 때문에 오류가 남
  // or 연산자로 예외처리를 해주면 오류가 나지 않음
  const [title, id] = router.query.params || [];
  return <div>{title}</div>;
};

export default Detail;
