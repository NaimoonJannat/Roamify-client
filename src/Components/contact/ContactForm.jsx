import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

const ContactForm = () => {
    return (
        <div className="lg:flex gap-4 lg:px-16 md:px-8 px-4 max-w-[1400px] mx-auto">
            <section className="flex-1">

                <h1 className="text-3xl font-poppins font-bold">Travel Agency Inc.</h1>
                <p className="font-barlow mt-4 text-gray-600 text-xl">Travel duru nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>

<div className="flex gap-6 items-center mt-6">

    <MdOutlinePhoneInTalk className="text-5xl text-[#2095ae]"/>
    <div>
        <h4 className="font-barlow mt-4 text-gray-600 text-xl">
        Phone</h4>
        <h1 className="font-semibold text-[#2095ae] text-3xl">855 333 4444</h1>
    </div>
</div>
<div className="flex gap-6 items-center mt-6">

    <MdOutlineEmail className="text-5xl text-[#2095ae]"/>
    <div>
        <h4 className="font-barlow mt-4 text-gray-600 text-xl">
        Email</h4>
        <h1 className="font-semibold text-[#2095ae] text-3xl">info@roamify.com</h1>
    </div>
</div>
<div className="flex gap-6 items-center mt-6">

    <IoLocationOutline className="text-5xl text-[#2095ae]"/>
    <div>
        <h4 className="font-barlow mt-4 text-gray-600 text-xl">
        Location</h4>
        <h4 className="font-barlow mt-4 text-gray-600 text-xl">
        1616 Broadway NY, New York 10001 <br />
United States of America</h4>
        
    </div>
</div>

            </section>



            <section className="bg-gray-300 mt-12 lg:mt-0 ">

                <h1 className="bg-[#2095ae] text-center text-white text-2xl font-bold p-4">Get in Touch</h1>
<form className="px-6 py-12">

<div className="md:flex gap-6">


    <input type="email" placeholder="Your Email*" class="block rounded py-6 w-full border border-gray-200 bg-white px-5  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


    <input type="text" placeholder="Your Name*" class="block rounded py-6 mt-6 w-full md:mt-0 border border-gray-200 bg-white px-5  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />



</div>
<div className="md:flex gap-6 mt-6">


    <input type="text" placeholder="Your Number*" class="block rounded py-6 border w-full border-gray-200 bg-white px-5  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


    <input type="text" placeholder="Subject*" class="block rounded py-6 border border-gray-200 w-full bg-white px-5  text-gray-700 focus:border-blue-400 mt-6 md:mt-0 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />



</div>
<div className="mt-6">

<textarea placeholder="Message*" class="block rounded py-6 border border-gray-200 h-44 bg-white px-5 w-full  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">



</textarea>





</div>




<button className="relative px-8 py-4 mt-6 text-white bg-[#2095ae] overflow-hidden group">
  <span className="relative z-10">Send Message</span>
  <div className="absolute inset-0 bg-[#1288a2] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:origin-left"></div>
</button>


</form>

            </section>

        </div>
    );
};

export default ContactForm;