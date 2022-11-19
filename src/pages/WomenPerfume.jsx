import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const WomenPerfume = ({ products }) => {
	return (
		<div>
			<Header />
			<section className="container flex flex-wrap justify-center mt-10 gap-5">
				{products.slice(0, 10).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
			<Footer />
		</div>
	);
};

export default WomenPerfume;
