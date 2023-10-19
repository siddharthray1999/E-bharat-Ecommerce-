import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/Data/myContext";
import HeroSection from "../../Components/Herosection/Herosection";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/productCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Track from "../../Components/Track/Track";

function Home() {
  const context = useContext(myContext);
  console.log(context);

  return (
    <Layout>
      <HeroSection /> <Filter />
      <ProductCard />
      <Track/>
      <Testimonial/>
    </Layout>
  );
}

export default Home;
