import { Title } from "./Title";

export function Navbar() {
    return (
        <aside className="sticky top-0 h-screen flex flex-col md:flex shadow-lg p-3">
            <a href="/"><Title children="Recipe Finder"/></a>
            <nav>
                <ul>
                    <li>Saved</li>
                </ul>
            </nav>
        </aside>
    )
} 