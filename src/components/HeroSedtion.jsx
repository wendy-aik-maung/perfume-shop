import React from "react";
import styled from "styled-components";
import Header from "./Header";

const HeroSedtion = () => {
	return (
		<StyledSection>
			<Header />
			<div className="absolute w-2/3 translate-x-10 translate-y-48">
				<h1 className="text-5xl font-bold">
					You're never fully dressed without perfume!
				</h1>
				<p className="py-3">
					Odors have a power of persuasion stronger than that of words,
					appearances, emotions.{" "}
				</p>
				<p>Shop over 100 instock perfumes in one place.</p>

				<button className="btn btn-active btn-secondary mt-3">Grab Now</button>
			</div>
		</StyledSection>
	);
};

export default HeroSedtion;
const StyledSection = styled.section`
	background: url("../src/images/bg8.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-radius: 20px;
	background-shadow: rgba(0, 0, 0, 0.8) 0 0 20px;
	position: relative;
	height: 700px;
	// width: 500px;
	background-color: #d0e0c3;
`;
