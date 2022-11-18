import React from "react";
import BestSellerPerfume from "../components/BestSellerPerfume";
import Footer from "../components/Footer";
import HeroSedtion from "../components/HeroSedtion";
import NewArrivalPerfume from "../components/NewArrivalPerfume";
import Testimonial from "../components/Testimonial";

const Rememberance = ({ products, handleCount }) => {
	return (
		<div>
			<HeroSedtion handleCount={handleCount} />
			<NewArrivalPerfume products={products} />
			<BestSellerPerfume products={products} />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Rememberance;
