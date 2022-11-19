import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const AllProducts = ({ products }) => {
	return (
		<div>
			<Header />
			<section className="container flex flex-wrap justify-center mt-10 gap-5">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
			<Footer />
		</div>
	);
};

export default AllProducts;
