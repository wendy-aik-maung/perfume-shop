import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const AllProducts = ({ products }) => {
	return (
		<div>
			<Header />
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default AllProducts;
