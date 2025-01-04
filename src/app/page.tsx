
import FeaturesSection from "./component/Features";
import Hero from "./component/Hero";
import Product from "./component/product";
import GallerySection from "./component/ProductGrid";
import RoomInspiration from "./component/Roominspiration";




export default function Home() {
  return (
    <div>
     <Hero/>
     <Product/>
     <RoomInspiration/>
      <GallerySection/>
     <FeaturesSection/>
    </div>
  );
}