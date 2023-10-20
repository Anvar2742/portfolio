const ContactInfo = () => {
    return (
        <div className=" max-w-xs bg-customBlack rounded-xl mx-auto py-8 px-10">
            <h3 className="text-3xl font-serif mb-5 text-white capitalize text-center">
                coordones
            </h3>
            <a
                href="mailto:anvarmusa12@gmail.com"
                className=" text-lightGray block hover:underline"
            >
                anvarmusa12@gmail.com
            </a>
            <a
                href="tel:+33782278382"
                className=" text-lightGray block hover:underline"
            >
                +33 (7) 82 27 83 82
            </a>
            <a
                href="https://www.linkedin.com/in/anvar-musaev/"
                target="_blank"
                className=" text-lightGray block hover:underline"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/Anvar2742"
                target="_blank"
                className=" text-lightGray block hover:underline"
            >
                GitHub
            </a>
            <a
                href="https://twitter.com/AnvarMusa27"
                target="_blank"
                className=" text-lightGray block hover:underline"
            >
                Twitter
            </a>
        </div>
    );
};

export default ContactInfo;
