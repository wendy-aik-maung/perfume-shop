import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
const BestSellerPerfume = ({ products, handleCount }) => {
	return (
		<section className="container flex-col mt-10">
			<div className="text-center text-3xl font-bold pt-2 pb-5">
				<div className="flex justify-between ml-12 mr-12">
					<h3 className="basis-3/2 ">Best Seller Fragrances</h3>
					<Link to="/best-seller">
						<motion.button
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.3 }}
							className="btn btn-sm btn-secondary">
							See All
						</motion.button>
					</Link>
				</div>
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
