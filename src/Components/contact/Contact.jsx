import HeaderBanner from "../Shared/HeaderBanner";
import ContactForm from "./ContactForm";
import Map from "./Map";


const Contact = () => {
    
    return (
        <div>
           <HeaderBanner img={'https://i.ibb.co.com/xXRmSNM/15.jpg'} title={'Contact Us'} subtitle={'Get in touch'}/>
           <ContactForm/>
        <div className="mt-16">
        <Map/>
        </div>
        </div>
    );
};

export default Contact;