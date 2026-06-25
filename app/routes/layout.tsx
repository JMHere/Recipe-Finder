import { Outlet } from "react-router";
import { Navbar } from "~/components/Navbar";

export default function Layout() {
    return (
        <div className="flex min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}