import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import NewArrival from "./pages/NewArrival";
import BestSeller from "./pages/BestSeller";
import MenPerfume from "./pages/MenPerfume";
import WomenPerfume from "./pages/WomenPerfume";

function App() {
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	{
		/* <Link to="/">Home</Link> */
	}
	// <Routes>
	// 	<Route path="/" element={<User props />} />
	// </Routes>;
	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleCount = () => {
		setCount(count + 1);
	};
	const handleCart = () => {};
	console.log(products);
	return (
		<StyledContainer>
			<StyledSection>
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
								<Link to="/new-arrival">New Arrival</Link>
								<Link to="/women">Women</Link>
								<Link to="/men">Men</Link>
							</ul>
						</div>
						<a className="text-2xl">Rememberance</a>

						<label className="input-group-xs  ">
							<input type="text" placeholder="Search…" className="input" />
							{/* <button className="btn btn-ghost">
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
								</button> */}
						</label>
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
										<button
											className="btn btn-primary btn-block"
											onClick={Cart}>
											View cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Routes>
					<Route
						path="/new-arrival"
						element={<NewArrival products={products} />}
					/>
					<Route
						path="/best-seller"
						element={<BestSeller products={products} />}
					/>
					<Route path="/women" element={<WomenPerfume products={products} />} />
					<Route path="/men" element={<MenPerfume products={products} />} />
				</Routes>
				<div className="absolute w-2/3 translate-x-10 translate-y-60">
					<h1 className="text-5xl font-bold">
						You're never fully dressed without perfume!
					</h1>
					<p className="py-3">
						Odors have a power of persuasion stronger than that of words,
						appearances, emotions. Shop over 100 instock perfumes in one place.
					</p>
					<button className="btn btn-primary mt-3">Grab Now</button>
				</div>
			</StyledSection>
			<section className="container flex gap-5 mt-10 mb-10 relative">
				<figure className="basis-50 max-h-50">
					<img src="../src/images/p10.jpg" />
				</figure>
				<figure className="basis-50 max-h-50">
					<img src="../src/images/p2.jpg" />
				</figure>
				<div className="absolute translate-x-80 translate-y-40">
					<h2 className="text-2xl font-bold">
						The new collection of Fragrances
					</h2>
					<button className="btn btn-primary translate-x-40 mt-3">
						<Link to="/best-seller">Shop Now</Link>
					</button>
				</div>
			</section>
			<section className="container flex-col mt-10">
				<div className="text-center text-3xl font-bold pt-3 pb-3">
					Best Seller Fragrances
				</div>
				<div className="flex gap-5">
					{products.slice(0, 3).map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							handleCount={handleCount}
						/>
					))}

					{/* <div className="basis-30 card shadow-xl">
						<figure className="max-h-64">
							<img src="../src/images/dior1.jpg" alt="Dior" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								Dior Blooming Bouquet
								<div className="badge badge-secondary">Women</div>
							</h2>
							<p>
								Miss Dior Eau de Parfum (2021) was launched in 2021. The nose
								behind this fragrance is Francois Demachy. Top notes are iris,
								Peony and Lily-of-the-Valley; middle notes are Apricot, Rose and
								Peach; base notes are Vanilla, Musk, Tonka Bean, Sandalwood and
								Benzoin.
							</p>
							<div className="card-actions">
								<button className="btn btn-primary">Shop Now</button>
							</div>
						</div>
					</div>
					<div className="basis-30 card  shadow-xl">
						<figure className="max-h-64">
							<img src="../src/images/yslop3.jpeg" alt="YSL" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								YSL
								<div className="badge badge-secondary">Women</div>
							</h2>
							<p>
								Miss Dior Eau de Parfum (2021) was launched in 2021. The nose
								behind this fragrance is Francois Demachy. Top notes are iris,
								Peony and Lily-of-the-Valley; middle notes are Apricot, Rose and
								Peach; base notes are Vanilla, Musk, Tonka Bean, Sandalwood and
								Benzoin.
							</p>
							<div className="card-actions">
								<button className="btn btn-primary">Shop Now</button>
							</div>
						</div>
					</div>
					<div className="basis-30 card shadow-xl">
						<figure className="max-h-64">
							<img src="../src/images/jomalone.jpeg" alt="Dior" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								Jomalone
								<div className="badge badge-secondary">Women</div>
							</h2>
							<p>
								Miss Dior Eau de Parfum (2021) was launched in 2021. The nose
								behind this fragrance is Francois Demachy. Top notes are iris,
								Peony and Lily-of-the-Valley; middle notes are Apricot, Rose and
								Peach; base notes are Vanilla, Musk, Tonka Bean, Sandalwood and
								Benzoin.
							</p>
							<div className="card-actions">
								<button className="btn btn-primary">Shop Now</button>
							</div>
						</div>
					</div> */}
				</div>
			</section>
			<section className="mt-10">
				<div className="carousel w-auto h-96">
					<div id="slide1" className="carousel-item relative w-full">
						<img src="../src/images/p4.jpg" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" className="btn btn-circle">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img src="../src/images/p2.jpg" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" className="btn btn-circle">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img src="../src/images/p10.jpg" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" className="btn btn-circle">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img src="../src/images/p17.jpg" className="w-full" />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" className="btn btn-circle">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer items-center p-4 bg-neutral text-neutral-content mt-5">
				<div className="items-center grid-flow-col">
					<p className="text-2xl font-bold">Follow us on</p>
					<br></br>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current">
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
						</svg>
					</a>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current">
							<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
						</svg>
					</a>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="fill-current">
							<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
						</svg>
					</a>
				</div>
				<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<p>Copyright © 2022 - All right reserved</p>
				</div>
			</footer>
			<Cart products={products} />
		</StyledContainer>
	);
}
function Cart({ products }) {
	return (
		<>
			<div>
				<div className="container flex">
					<h2>My Cart</h2>
					<button>Remove all</button>
				</div>
				<div className="card card-side bg-base-100 shadow-xl">
					<figure>
						<img src={products.image} alt="perfume" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">title</h2>
						<p>description</p>
						<div className="card-actions container flex">
							<button className="btn btn-primary">Increase</button>
							<button className="btn btn-primary">Decrease</button>
							<p> Quantity * price</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container flex">
				<h2>Total price</h2>
				<h2>price</h2>
			</div>
		</>
	);
}

export default App;
const StyledContainer = styled.div`
	background-color: #f4decb;
	max-width: 1024px;
	min-height: 2000px;
	margin-right: auto;
	margin-left: auto;
`;
const StyledSection = styled.section`
	background: url("../src/images/p17.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	height: 700px;
	background-color: #f4decb;
`;

// const StyledFigure = styled.figure`
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	z-index: 10;
// `;
