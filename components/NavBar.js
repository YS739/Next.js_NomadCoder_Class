import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import vercel from "../public/vercel.svg";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Image src={vercel} alt="버셀" />
      <div>
        {/* style 직접 적용해야 함 */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <text className={router.pathname === "/" ? "active" : ""}>Home</text>
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <text className={router.pathname === "/about" ? "active" : ""}>
            About
          </text>
        </Link>
      </div>
      {/* style jsx로는 Link태그에 className을 넣거나 Link 태그 그대로 사용해도 style 적용 안 됨 */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        nav text {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
