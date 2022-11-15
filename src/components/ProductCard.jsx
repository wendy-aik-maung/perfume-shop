import React from "react";

const ProductCard = ({ product, handleCount }) => {
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
					<button className="btn btn-primary" onClick={handleCount}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
