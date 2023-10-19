import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className=" py-28">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className=" text-4xl font-semibold font-serif mb-7 text-center">
                    Contactez moi
                </h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={` max-w-xs mx-auto grid gap-4 ${
                        isLoading ? "opacity-60" : ""
                    }`}
                >
                    <div>
                        <label className="block font-serif text-darkBlue text-lg">
                            Votre nom *
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Votre nom"
                            className=" border-2 border-gray-400 rounded-lg w-full py-1 px-2"
                        />
                    </div>
                    <div>
                        <label className="block font-serif text-darkBlue text-lg">
                            Votre mail *
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Votre mail"
                            className=" border-2 border-gray-400 rounded-lg w-full py-1 px-2"
                        />
                    </div>
                    <div>
                        <label className="block font-serif text-darkBlue text-lg">
                            Votre message
                        </label>
                        <textarea
                            name="message"
                            className=" border-2 border-gray-400 rounded-lg w-full py-1 px-2"
                            placeholder="Votre message"
                            rows={3}
                        />
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;
