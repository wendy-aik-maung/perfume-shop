import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import NewArrival from "./pages/NewArrival";
import BestSeller from "./pages/BestSeller";
import MenPerfume from "./pages/MenPerfume";
import WomenPerfume from "./pages/WomenPerfume";
import Rememberance from "./pages/Rememberance";
import PerfumeDetail from "./pages/PerfumeDetail";
import AllPerfume from "./pages/AllPerfume";
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

	const handleRemove = (product) => {
		const remainingProduct = selectedProduct.find(
			(selectedItem) => selectedItem.id === product.id
		);
		if (remainingProduct.quantity === 1) {
			setSelectedProduct(
				selectedProduct.filter((selectedItem) => selectedItem.id !== product.id)
			);
		} else {
			setSelectedProduct(
				selectedProduct.map((selectedItem) =>
					selectedItem.id === product.id
						? { ...remainingProduct, quantity: remainingProduct.quantity - 1 }
						: selectedItem
				)
			);
		}
	};
	console.log(products);
	const perfumeContextValue = {
		products,
		selectedProduct,
		handleCount,
		handleCart,
		handleRemove,
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
						path="/all"
						element={
							<AllPerfume products={products} handleCount={handleCount} />
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
					<Route path="/perfume-detail/id=:id" element={<PerfumeDetail />} />
					<Route
						path="/my-cart"
						element={<MyCart products={products} handleCart={handleCart} />}
					/>
				</Routes>
			</StyledContainer>
		</PerfumeContext.Provider>
	);
}

export default App;
const StyledContainer = styled.div`
	background-color: #f8eee7;
	max-width: 1024px;
	margin-right: auto;
	margin-left: auto;
`;
