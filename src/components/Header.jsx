import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NewArrival from "../pages/NewArrival";
import BestSeller from "../pages/BestSeller";
import WomenPerfume from "../pages/WomenPerfume";
import MenPerfume from "../pages/MenPerfume";
import { PerfumeContext } from "../App";

const Header = () => {
	const { count, products } = useContext(PerfumeContext);
	return (
		<div className="navbar flex align-item-center justify-between">
			<div className="navbar-start basis-42">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link to="/new-arrival">New Arrival</Link>
						</li>
						<li>
							<Link to="/women">Women</Link>
						</li>
						<li>
							<Link to="/men">Men</Link>
						</li>
					</ul>
				</div>
				{/* <a className="btn btn-ghost normal-case text-xl">Rememberance</a> */}
				<Link to="/">
					<h3 className="text-2xl font-bold">Rememberance</h3>
				</Link>
			</div>
			<div className="form-control justify-center">
				<label className="input-group input-group-xs input-ghost input-border-none">
					<input type="text" placeholder="Search…" className="input" />
					<button className="btn btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</label>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">{count}</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
						<div className="card-body">
							<span className="font-bold text-lg">{count} Items</span>

							<div className="card-actions">
								<Link to="/my-cart">
									<button className="btn btn-primary btn-block">
										View cart
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
