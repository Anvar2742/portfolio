import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Work = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <section data-scroll-section className="pt-28 pb-24" id="work">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-xl uppercase font-bold mb-24">
                    work
                </h2>
                <div className="grid gap-32">
                    <article className="relative rounded-3xl bg-[#EDF0F9] px-16 flex justify-between gap-11 overflow-hidden">
                        <div className=" w-40 h-40 bg-[#D9DEEE] absolute rounded-br-full -left-3 -top-3"></div>
                        <div className="h-full w-1/2 flex flex-col justify-center gap-6 pt-24 pb-20 z-10">
                            <h3 className="font-serif text-4xl font-semibold">
                                WooCommerce development Booriva
                            </h3>
                            <div className="flex gap-4">
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WordPress
                                </span>
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WooCommerce
                                </span>
                            </div>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div className="flex w-1/2 pt-16 relative z-10">
                            <img
                                src="./work/booriva-1.png"
                                alt=""
                                className=" w-[70%]"
                            />
                            <img
                                src="./work/booriva-phone.png"
                                alt=""
                                className="absolute right-0 w-[70%]"
                            />
                        </div>
                        <div className=" w-1/3 h-full bg-[#D9DEEE] absolute rounded-tl-[250px] right-0"></div>
                    </article>
                    <article className="relative rounded-3xl bg-[#EDF0F9] pl-16 flex justify-between gap-11 overflow-hidden">
                        <div className=" w-40 h-40 bg-[#D9DEEE] absolute rounded-br-full -left-3 -top-3"></div>
                        <div className="h-full w-1/2 flex flex-col justify-center gap-6 pt-24 pb-20 z-10">
                            <h3 className="font-serif text-4xl font-semibold">
                                WooCommerce development Booriva
                            </h3>
                            <div className="flex gap-4">
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WordPress
                                </span>
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WooCommerce
                                </span>
                            </div>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div className="flex w-1/2 relative z-10">
                            <img
                                src="./work/mrcharge.png"
                                alt=""
                                className=" scale-125 -ml-14"
                            />
                        </div>
                        <div className=" w-1/3 h-full bg-[#D9DEEE] absolute rounded-tl-[250px] right-0"></div>
                    </article>

                    <article className="relative rounded-3xl bg-[#EDF0F9] px-16 flex justify-between items-end gap-11 overflow-hidden">
                        <div className=" w-40 h-40 bg-[#D9DEEE] absolute rounded-br-full -left-3 -top-3"></div>
                        <div className="h-full w-1/2 flex flex-col justify-center gap-6 pt-24 pb-20 z-20">
                            <h3 className="font-serif text-4xl font-semibold">
                                WooCommerce development Booriva
                            </h3>
                            <div className="flex gap-4">
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WordPress
                                </span>
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WooCommerce
                                </span>
                            </div>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div className="flex z-10 w-1/2">
                            <img
                                src="./work/theworldmag.png"
                                alt=""
                                className="w-full scale-125 -ml-4"
                            />
                        </div>
                        <div className=" w-1/3 h-full bg-[#D9DEEE] absolute rounded-tl-[250px] right-0"></div>
                    </article>
                    <article className="relative rounded-3xl bg-[#EDF0F9] px-16 flex justify-between items-end gap-11 overflow-hidden">
                        <div className=" w-40 h-40 bg-[#D9DEEE] absolute rounded-br-full -left-3 -top-3"></div>
                        <div className="h-full w-1/2 flex flex-col justify-center gap-6 pt-24 pb-20 z-20">
                            <h3 className="font-serif text-4xl font-semibold">
                                WooCommerce development Booriva
                            </h3>
                            <div className="flex gap-4">
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WordPress
                                </span>
                                <span className=" text-lg text-[#6878AC] font-semibold bg-[#D9DEEE] py-2 px-3 rounded-xl select-none">
                                    WooCommerce
                                </span>
                            </div>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div className="flex z-10 w-1/2">
                            <img
                                src="./work/cukr.png"
                                alt=""
                                className="w-full scale-125 -ml-4"
                            />
                        </div>
                        <div className=" w-1/3 h-full bg-[#D9DEEE] absolute rounded-tl-[250px] right-0"></div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Work;
