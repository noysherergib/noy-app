import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">Noy's App</Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
      </nav>
    </header>
  );
}
