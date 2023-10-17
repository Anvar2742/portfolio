import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="py-5" id="header" data-scroll-section>
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
                <Link to={"/"} className="text-3xl font-extrabold">
                    Anvar M.
                </Link>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#header" className="">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#work" className="">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="">
                                Get in touch
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
