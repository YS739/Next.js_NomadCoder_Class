import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import React from "react";

const Detail = ({ params }) => {
  const router = useRouter();
  // 시크릿 모드에서 디테일로 들어가면 백엔드(서버)에서는 아직 배열이 아니기 때문에 오류가 남
  // or 연산자로 예외처리를 해주면 오류가 나지 않음
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>;
    </div>
  );
};

export default Detail;

// 컴포넌트 내부에 있는 router는 클라이언트 사이드에서만 실행되어
// 페이지 소스에 영화에 대한 정보가 담기지 않는다.
// SEO를 위해 서버에서 정보를 받고 넘겨주면 페이지 소스에 정보가 담긴다.
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
