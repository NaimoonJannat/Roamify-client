import {useEffect, useState } from "react";
import HeaderBanner from "../Shared/HeaderBanner"
import BlogCurd from "./BlogCurd";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/blog.json");
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <section>
            <HeaderBanner title="Travel Experience" subtitle="Read travel blog" />

            {/* blog curd */}
            <div>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group  lg:grid lg:grid-cols-12 dark:bg-gray-50">
                            <img src="https://i.ibb.co.com/Sw0D45n/md-junayed-hossain-qyo-XIEq-Cy-FA-unsplash.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl ">Noster tincidunt reprimique ad pro</h3>
                                <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                            </div>
                        </div>

                        {/* blogs curd */}
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs.map((blog, idx) => {
                                    return (
                                        <BlogCurd key={idx} blog={blog} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Blog