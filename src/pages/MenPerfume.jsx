import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const MenPerfume = ({ products }) => {
	return (
		<div>
			<Header />
			{products.slice(11, 20).map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default MenPerfume;
