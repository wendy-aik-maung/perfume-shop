import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import NewArrival from "./pages/NewArrival";
import BestSeller from "./pages/BestSeller";
import MenPerfume from "./pages/MenPerfume";
import WomenPerfume from "./pages/WomenPerfume";
import Rememberance from "./pages/Rememberance";
import PerfumeDetail from "./pages/PerfumeDetail";
import MyCart from "./pages/MyCart";

export const PerfumeContext = createContext();
function App() {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [count, setCount] = useState(0);
	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleCount = () => {
		setCount(count + 1);
	};

	const handleCart = (product) => {
		const remainingProduct = selectedProduct.find(
			(selectedItem) => selectedItem.id === product.id
		);
		if (remainingProduct) {
			setSelectedProduct(
				selectedProduct.map((selectedItem) =>
					selectedItem.id === product.id
						? { ...remainingProduct, quantity: remainingProduct.quantity + 1 }
						: selectedItem
				)
			);
		} else {
			setSelectedProduct([...selectedProduct, { ...product, quantity: 1 }]);
		}
	};
	console.log(products);
	const perfumeContextValue = {
		products,
		selectedProduct,
		handleCount,
		handleCart,
		count,
	};
	return (
		<PerfumeContext.Provider value={perfumeContextValue}>
			<StyledContainer>
				<Routes>
					<Route
						path="/"
						element={
							<Rememberance products={products} handleCount={handleCount} />
						}
					/>
					<Route
						path="/new-arrival"
						element={<NewArrival products={products} />}
					/>
					<Route
						path="/best-seller"
						element={
							<BestSeller products={products} handleCount={handleCount} />
						}
					/>
					<Route path="/women" element={<WomenPerfume products={products} />} />
					<Route path="/men" element={<MenPerfume products={products} />} />
					<Route path="/perfume-detail" element={<PerfumeDetail />} />
					<Route
						path="/my-cart"
						element={<MyCart products={products} handleCart={handleCart} />}
					/>
				</Routes>

				{/* <Cart products={products} /> */}
			</StyledContainer>
		</PerfumeContext.Provider>
	);
}
// function Cart({ products }) {
// 	return (
// 		<>
// 			<div>
// 				<div className="container flex">
// 					<h2>My Cart</h2>
// 					<button>Remove all</button>
// 				</div>
// 				<div className="card card-side bg-base-100 shadow-xl">
// 					<figure>
// 						<img src={products.image} alt="perfume" />
// 					</figure>
// 					<div className="card-body">
// 						<h2 className="card-title">title</h2>
// 						<p>description</p>
// 						<div className="card-actions container flex">
// 							<button className="btn btn-primary">Increase</button>
// 							<button className="btn btn-primary">Decrease</button>
// 							<p> Quantity * price</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="container flex">
// 				<h2>Total price</h2>
// 				<h2>price</h2>
// 			</div>
// 		</>
// 	);
// }

export default App;
const StyledContainer = styled.div`
	background-color: #f2eee2;
	max-width: 1024px;
	min-height: 2000px;
	margin-right: auto;
	margin-left: auto;
`;

// const StyledFigure = styled.figure`
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	z-index: 10;
// `;
// f4decb
//#D4BAA1 photo color
