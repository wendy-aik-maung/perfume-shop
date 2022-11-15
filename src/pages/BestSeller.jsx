import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const BestSeller = ({ products }) => {
	return (
		<div>
			<Header />
			{products.slice(5, 16).map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default BestSeller;
