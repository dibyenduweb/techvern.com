
import { useLoaderData } from "react-router-dom";


import Container from "../Container/Container";
import Carousel from "./Carousel";
import FeaturedCategory from "./FeaturedCategory";
import Products from "./Products";
import Menu from "./Menu";
const Home = () => {
    const brandData = useLoaderData();
    console.log(brandData);
    return (
        <>
       
        <Container>
        <Menu/>
        <Carousel/>
        <FeaturedCategory/>
        <Products/>
      </Container>
            </>
       
    );
};

export default Home;