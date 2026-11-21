import Link from "next/link";
import ThemeToggle from "./Toggle.js";

export default function Header() {
    return (
        <header className="header">
            <h2>The Philonomosian Society</h2>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <ThemeToggle />
            </nav>
        </header>
    );
}
