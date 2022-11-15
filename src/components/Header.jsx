import React from "react";

const Header = ({ count }) => {
	return (
		<div className="navbar flex justify-between">
			<div className="navbar-start basis-24">
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
							<a>New Arrivals</a>
						</li>
						<li>
							<a>Women</a>
						</li>
						<li>
							<a>Men</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Rememberance</a>
				<div className="form-control">
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
			</div>

			<div className="navbar-end basis-28">
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
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<button className="btn btn-primary btn-block">View cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
