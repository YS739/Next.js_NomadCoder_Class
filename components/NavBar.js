import Link from "next/link";
import { useRouter } from "next/router";
import s from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={s.nav}>
      <Link
        style={{ color: router.pathname === "/" ? "forestgreen" : "lavender" }}
        href="/"
      >
        Home
      </Link>
      <Link
        // module.css 두 css 합쳐서 쓰기
        // className={`${s.link} ${router.pathname === "/about" ? s.active : ""}`}
        className={[s.link, router.pathname === "/about" ? s.active : ""].join(
          " "
        )}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
