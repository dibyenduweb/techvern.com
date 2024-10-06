
import { useLoaderData } from "react-router-dom";


import Container from "../Container/Container";
import Header from "./Header";
import Carousel from "./Carousel";
import FeaturedCategory from "./FeaturedCategory";
import Products from "./Products";
import Footer from "../Section/Footer";




const Home = () => {
    const brandData = useLoaderData();
    console.log(brandData);
    return (
        <>
        <Header/>
        <Carousel/>
        <FeaturedCategory/>
        <Products/>
        <Footer/>
        <Container>
      </Container>
            </>
       
    );
};

export default Home;