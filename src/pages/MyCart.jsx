import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PerfumeContext } from "../App";
import { BsFillInboxFill } from "react-icons/bs";
const MyCart = ({ product }) => {
	const { selectedProduct, handleCount, handleCart, handleRemove } =
		useContext(PerfumeContext);
	const overall = selectedProduct.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);
	return (
		<>
			<Header />
			<h3 className="text-2xl font-bold text-center mt-5 mb-5">My Cart</h3>

			{selectedProduct.length === 0 && (
				<div className="card justify-center w-auto">
					<div className="card-body items-center text-center">
						<h2 className="card-title">
							<BsFillInboxFill size={50} />
						</h2>
						<p>There is no perfume related with your cart!</p>
					</div>
				</div>
			)}

			<div>
				{selectedProduct.map((selectedItem) => (
					<div
						key={selectedItem.id}
						className="container flex justify-between mt-10">
						<figure className="basis-36 container max-h-48 max-w-24 ml-5">
							<img src={selectedItem.image} alt="Perfume" />
						</figure>
						<div className="basis-48 mt-18">
							<button
								className="btn btn-secondary ml-10"
								onClick={() => handleCart(selectedItem)}>
								+
							</button>
							<button
								className="btn btn-secondary ml-5"
								onClick={() => handleRemove(selectedItem)}>
								-
							</button>
						</div>
						<p className="basis-20 mt-18">
							{selectedItem.quantity} * ${selectedItem.price}
						</p>
					</div>
				))}
				{selectedProduct.length !== 0 && (
					<>
						<hr></hr>
						<div className="container flex justify-end mt-10">
							<h3 className="text-2xl font-bold mr-5">Total - </h3>
							<p className="text-right text-2xl mr-5">${overall}</p>
						</div>
						<div className="flex justify-end mr-5">
							<button className="btn btn-secondary mt-10 btn-center">
								Check Out
							</button>
						</div>
					</>
				)}
			</div>
			<Footer />
		</>
	);
};

export default MyCart;
