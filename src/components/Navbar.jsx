import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="py-5">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
                <Link to={"/"}>Anvar M.</Link>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link to={"/some"} className="">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/some"} className="">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to={"/some"} className="">
                                Get in touch
                            </Link>
                        </li>
                        <li>
                            <Link to={"/some"} className="">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
