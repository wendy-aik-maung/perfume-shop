import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const WomenPerfume = ({ products }) => {
	return (
		<div>
			<Header />
			{products.slice(0, 10).map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default WomenPerfume;
