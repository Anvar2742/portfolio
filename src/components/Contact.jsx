import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const initialForm = {
        user_name: "",
        user_email: "",
        message: "",
    };
    const [formData, setFormData] = useState(initialForm);
    const [formErrors, setFormErrors] = useState(initialForm);
    const [generalErr, setGeneralErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        setFormErrors(initialForm);

        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formDataKeys = Object.keys(formData);
        Object.values(formData).forEach((el, i) => {
            if (!el && formDataKeys[i] !== "message") {
                setFormErrors((prevFormErrors) => {
                    return {
                        ...prevFormErrors,
                        [formDataKeys[i]]: "Ce champ est obligatoire",
                    };
                });
                return;
            }
        });
        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    setIsSent(true);
                },
                (error) => {
                    // console.log(error.text);
                    setGeneralErr("Une erreur est survenue");
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className=" pt-28 pb-36">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className=" text-4xl font-semibold font-serif mb-7 text-center">
                    Contactez moi
                </h2>
                {isSent ? (
                    <div className="max-w-xs mx-auto shadow-center rounded-2xl py-10 px-8">
                        <h3 className="text-2xl font-semibold mt-5s font-serif text-center">
                            J'ai recu votre message, merci!
                        </h3>
                    </div>
                ) : (
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={` max-w-xs mx-auto grid gap-4 relative`}
                    >
                        {isLoading ? (
                            <div className="absolute top-0 left-0 bg-white bg-opacity-80 w-full h-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className=" stroke-lightBlue w-16 h-16 animate-spin "
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M12 6l0 -3"></path>
                                    <path d="M16.25 7.75l2.15 -2.15"></path>
                                    <path d="M18 12l3 0"></path>
                                    <path d="M16.25 16.25l2.15 2.15"></path>
                                    <path d="M12 18l0 3"></path>
                                    <path d="M7.75 16.25l-2.15 2.15"></path>
                                    <path d="M6 12l-3 0"></path>
                                    <path d="M7.75 7.75l-2.15 -2.15"></path>
                                </svg>
                            </div>
                        ) : (
                            ""
                        )}
                        <div>
                            <label className="block font-serif text-darkBlue text-lg">
                                Votre nom *
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Votre nom"
                                className={`border-2 border-gray-400 rounded-lg w-full py-1 px-2 ${
                                    formErrors.user_name ? "border-red-400" : ""
                                }`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formErrors.user_name ? (
                                <p className="text-red-400">
                                    {formErrors.user_name}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div>
                            <label className="block font-serif text-darkBlue text-lg">
                                Votre mail *
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Votre mail"
                                className={`border-2 border-gray-400 rounded-lg w-full py-1 px-2 ${
                                    formErrors.user_email
                                        ? "border-red-400"
                                        : ""
                                }`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.user_email ? (
                                <p className="text-red-400">
                                    {formErrors.user_email}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div>
                            <label className="block font-serif text-darkBlue text-lg">
                                Votre message
                            </label>
                            <textarea
                                name="message"
                                className={`resize-none border-2 border-gray-400 rounded-lg w-full py-1 px-2 ${
                                    formErrors.message ? "border-red-400" : ""
                                }`}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Votre message"
                                rows={5}
                            />
                            {formErrors.message ? (
                                <p className="text-red-400">
                                    {formErrors.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        {generalErr ? (
                            <p className="text-red-400">{generalErr}</p>
                        ) : (
                            ""
                        )}
                        <button
                            type="submit"
                            className="mx-auto py-4 px-11 inline-flex items-center justify-center gap-1 text-white bg-orange rounded-xl font-bold  transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            Envoyer
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6441 10.906L11.7551 1.14883L2.00151 1.43673M10.6572 2.26684L1.2451 11.8512"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
