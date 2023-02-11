import { useRouter } from "next/router";
import React from "react";

const Detail = ({ params }) => {
  const router = useRouter();
  // 시크릿 모드에서 디테일로 들어가면 백엔드(서버)에서는 아직 배열이 아니기 때문에 오류가 남
  // or 연산자로 예외처리를 해주면 오류가 나지 않음
  const [title, id] = params || [];
  return <div>{title}</div>;
};

export default Detail;

// router만 사용했을 땐 페이지 소스에 영화에 대한 정보가 담기지 않음
// SEO를 위해 서버에서 정보를 받고 넘겨주면 페이지 소스에 정보가 담긴다.
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
