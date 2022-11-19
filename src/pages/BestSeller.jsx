import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const BestSeller = ({ products, handleCount }) => {
	return (
		<div>
			<Header />
			<section className="container flex flex-wrap justify-center mt-10 gap-5">
				{products.slice(5, 16).map((product) => (
					<ProductCard
						id={product.id}
						product={product}
						handleCount={handleCount}
					/>
				))}
			</section>
			<Footer />
		</div>
	);
};

export default BestSeller;
