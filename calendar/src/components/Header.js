import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <h2>Nomos Website</h2>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}