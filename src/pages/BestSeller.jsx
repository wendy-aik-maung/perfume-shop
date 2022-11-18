import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const BestSeller = ({ products, handleCount }) => {
	return (
		<div>
			<Header />
			{products.slice(5, 16).map((product) => (
				<ProductCard
					id={product.id}
					product={product}
					handleCount={handleCount}
				/>
			))}
			console.log("counter", count);
		</div>
	);
};

export default BestSeller;
