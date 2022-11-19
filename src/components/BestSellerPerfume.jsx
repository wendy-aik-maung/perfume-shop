import React from "react";
import ProductCard from "./ProductCard";
const BestSellerPerfume = ({ products, handleCount }) => {
	return (
		<section className="container flex-col mt-10">
			<div className="text-center text-3xl font-bold pt-3 pb-5">
				Best Seller Fragrances
			</div>
			<div className="flex gap-5 ml-4 mr-4">
				{products.slice(0, 3).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						handleCount={handleCount}
					/>
				))}
			</div>
		</section>
	);
};

export default BestSellerPerfume;
