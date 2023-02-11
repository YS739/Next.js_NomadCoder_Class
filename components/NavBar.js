import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* style 직접 적용해야 함 */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <text className={router.pathname === "/" ? "active" : ""}>Home</text>
      </Link>
      <Link href="/about" style={{ textDecoration: "none" }}>
        <text className={router.pathname === "/about" ? "active" : ""}>
          About
        </text>
      </Link>
      {/* style jsx로는 Link태그에 className을 넣거나 Link 태그 그대로 사용해도 style 적용 안 됨 */}
      <style jsx>{`
        nav {
          background-color: lavender;
        }
      `}</style>
    </nav>
  );
}
