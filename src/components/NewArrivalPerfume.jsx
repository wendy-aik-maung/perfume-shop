import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewArrival from "../pages/NewArrival";
const NewArrivalPerfume = () => {
	return (
		<section className="container flex gap-10 mt-10 mb-10 relative">
			<div className="basis-70 ml-28 h-auto">
				<img src="../src/images/bg2.jpg" />
			</div>
			<div className="basis-30 mr-28 w-auto">
				<img src="../src/images/bg11.jpg" />
			</div>
			<div className="absolute translate-x-80 translate-y-36 bg-slate-600 bg-opacity-50">
				<h2 className="text-2xl font-bold pt-5 pl-5 pr-5">
					The new collection of Fragrances
				</h2>
				<Link to="/new-arrival">
					<motion.button
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.3 }}
						className="btn btn-secondary mt-3 ml-28 mb-5">
						Shop Now
					</motion.button>
				</Link>
			</div>
		</section>
	);
};

export default NewArrivalPerfume;
// max-h-50
