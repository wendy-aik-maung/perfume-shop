import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PerfumeDetail = ({ product, key }) => {
	console.log("View pd", product);
	return (
		<>
			<Header />
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
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>

			<label htmlFor="my-modal" className="btn">
				Review this product
			</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Share your thoughts with other customers!
					</h3>
					<textarea
						className="textarea textarea-primary"
						placeholder="Bio"></textarea>
					<div className="modal-action">
						<label htmlFor="my-modal" className="btn">
							Submit
						</label>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PerfumeDetail;
