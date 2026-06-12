import { Outlet } from "react-router";
import { Navbar } from "~/components/Navbar";

export default function Layout() {
    return (
        <div className="flex h-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}