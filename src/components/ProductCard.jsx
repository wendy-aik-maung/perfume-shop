import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PerfumeContext } from "../App";
import PerfumeDetail from "../pages/PerfumeDetail";

const ProductCard = ({ product }) => {
	const { handleCount, handleCart } = useContext(PerfumeContext);
	return (
		<motion.div
			initial={{ opicity: 0.5, scale: 0.8 }}
			whileHover={{ opicity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			className="basis-1/3 flex card gap-5 shadow-xl overflow-hidden">
			<figure className="max-h-64">
				<img src={product.image} />
			</figure>
			<div className="card-body">
				<h2 className="card-title truncate text-semibold">
					{product.title}
					<div className="badge badge-secondary">{product.category}</div>
				</h2>
				<p className="max-h-36 text-clip overflow-hidden">
					{product.description}
				</p>
				<div className="card-actions flex mx-auto">
					<motion.button
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.2 }}
						className="btn btn-active btn-secondary"
						onClick={() => {
							handleCount();
							handleCart(product);
						}}>
						Add to Cart
					</motion.button>
					{/* <Link to={"/perfume-detail"}>
						<button className="btn btn-primary">View Details</button>
					</Link> */}
				</div>
			</div>
		</motion.div>
	);
};

export default ProductCard;
{
	/* <PerfumeDetail product={product} key={product.id} /> */
}
