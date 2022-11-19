import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PerfumeContext } from "../App";
import PerfumeDetail from "../pages/PerfumeDetail";

const ProductCard = ({ product }) => {
	const { handleCount, handleCart } = useContext(PerfumeContext);
	return (
		<div className="basis-1/3 flex card shadow-xl">
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
					<button
						className="btn btn-active btn-secondary"
						onClick={() => {
							handleCount();
							handleCart(product);
						}}>
						Add to Cart
					</button>
					{/* <Link to={"/perfume-detail"}>
						<button className="btn btn-primary">View Details</button>
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
{
	/* <PerfumeDetail product={product} key={product.id} /> */
}
