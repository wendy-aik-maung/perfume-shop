import React from "react";
import { Link } from "react-router-dom";
import NewArrival from "../pages/NewArrival";
const NewArrivalPerfume = () => {
	return (
		<section className="container flex gap-10 mt-10 mb-10 relative">
			<div className="basis-70 ml-28 h-auto">
				<img src="../src/images/p10.jpg" />
			</div>
			<div className="basis-30 mr-28 w-auto mt-8">
				<img src="../src/images/p2.jpg" />
			</div>
			<div className="absolute translate-x-80 translate-y-40">
				<h2 className="text-2xl font-bold">The new collection of Fragrances</h2>
				<Link to="/new-arrival">
					<button className="btn btn-primary translate-x-40 mt-3">
						Shop Now
					</button>
				</Link>
			</div>
		</section>
	);
};

export default NewArrivalPerfume;
// max-h-50
