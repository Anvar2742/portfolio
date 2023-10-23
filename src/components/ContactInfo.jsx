const ContactInfo = () => {
    return (
        <div className="py-8 px-10">
            <h3 className="text-3xl font-serif mb-5 text-white capitalize">
                Coordonnés
            </h3>
            <ul>
                <li>
                    <a
                        href="tel:+33782278382"
                        className=" text-white opacity-90 hover:underline"
                    >
                        +33 (7) 82 27 83 82
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/anvar-musaev/"
                        target="_blank"
                        className=" text-white opacity-90 hover:underline"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Anvar2742"
                        target="_blank"
                        className=" text-white opacity-90 hover:underline"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/AnvarMusa27"
                        target="_blank"
                        className=" text-white opacity-90 hover:underline"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
