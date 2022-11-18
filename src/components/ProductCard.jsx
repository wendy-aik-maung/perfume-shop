import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PerfumeContext } from "../App";
import PerfumeDetail from "../pages/PerfumeDetail";

const ProductCard = ({ product }) => {
	const { handleCount, handleCart } = useContext(PerfumeContext);
	return (
		<div className="basis-30 card shadow-xl">
			<figure className="max-h-64">
				<img src={product.image} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{product.title}
					<div className="badge badge-secondary">Women</div>
				</h2>
				<p>{product.description}</p>
				<div className="card-actions">
					<button
						className="btn btn-primary"
						onClick={() => {
							handleCount();
							handleCart(product);
						}}>
						Add to Cart
					</button>
					<Link to="/perfume-detail">
						<button
							className="btn btn-primary"
							onClick={<PerfumeDetail product={product} key={product.id} />}>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
{
	/* <PerfumeDetail product={product} key={product.id} /> */
}
