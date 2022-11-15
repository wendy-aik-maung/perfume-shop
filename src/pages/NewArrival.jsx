import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const NewArrival = ({ products }) => {
	return (
		<div>
			<Header />
			{products.slice(0, 6).map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default NewArrival;
