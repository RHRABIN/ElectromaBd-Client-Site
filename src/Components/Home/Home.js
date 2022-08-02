import React from 'react';
import Footer from '../../Shared/Footer';
import BussinessRating from './BussinessRating';
import ContactForm from './ContactForm';
import Featured from './Featured';
import Heading from './Heading';
import OurService from './OurService';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <BussinessRating></BussinessRating>
            <Parts></Parts>
            <Featured></Featured>
            <Review></Review>
            <OurService></OurService>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;