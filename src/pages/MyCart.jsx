import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PerfumeContext } from "../App";
import { BsFillInboxFill } from "react-icons/bs";
const MyCart = ({ product }) => {
	const { selectedProduct, handleCount, handleCart } =
		useContext(PerfumeContext);
	return (
		<>
			<Header />
			<h3 className="text-2xl font-bold text-center mt-5">My Cart</h3>

			{selectedProduct.length === 0 && (
				<div className="flex-col justify-center mx-auto mt-5">
					<BsFillInboxFill size={50} />
					<div>There is no perfume related with your cart!</div>
				</div>
			)}

			<div>
				{selectedProduct.map((selectedItem) => {
					<div className="card w-96 card-side bg-base-100 shadow-xl">
						<figure>
							<img src={selectedItem.image} alt="Perfume" />
						</figure>
						<div className="card-body">
							<div className="card-actions justify-end">
								<button className="btn btn-primary">+</button>
								<button className="btn btn-primary">-</button>
							</div>
						</div>
					</div>;
				})}

				<div className="flex">
					<h3>Total</h3>
					<p>$1000</p>
				</div>
				<button>Check out onclick toast</button>
			</div>
			<Footer />
		</>
	);
};

export default MyCart;
