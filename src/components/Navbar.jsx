import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
    {
        path: "/",
        title: 'Home',
    },
    {
        path: "/about",
        title: 'About',
    },
    {
        path: "/profile",
        title: 'Profile',
    },
    {
        path: "/products",
        title: "Product"
    },
    {
        path: "/blogs",
        title: 'Blogs',
    },
    {
        path: "/Dashboard",
        title: 'Dashboard',
    },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className="text-3xl font-semibold">Next Hero</h1>
            <ul className="flex items-center gap-4 justify-center">
                {
                    navLinks.map(({path, title}) => <li
                        key={path}
                    >
                        <NavLink exact={path === '/'} activeClassName="text-blue-500" href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;