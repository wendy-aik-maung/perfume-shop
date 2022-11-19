import React from "react";
import styled from "styled-components";

const Testimonial = () => {
	return (
		<section className="mt-10">
			<styledSection className="carousel w-auto h-96">
				<div
					id="slide1"
					className="carousel-item relative w-full bg-transparent">
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl ">
						{/* <figure className="bg-cover w-full bg-no-repeat ">
							<img src="../src/images/bg3.jpg" alt="Shoes" />
						</figure> */}
						<div className="card-body items-center bg-[url('../src/images/bgg.jpg')] bg-cover h-full bg-opacity-0.5 bg-transparent text-center ml-10 mr-10">
							<p className="text-2xl font-semibold mt-28 mx-auto">
								I love this site with all of the beautiful wide selections of
								perfumes with great prices . I've been ordering and I'm so happy
								with my perfumes , I get lots of compliments on how nice I
								smell.
							</p>
						</div>
					</div>

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
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div className="card-body items-center bg-[url('../src/images/bgg.jpg')] bg-cover h-full bg-opacity-0.5 bg-transparent text-center ml-10 mr-10">
							<p className="text-2xl font-semibold mt-28 mx-auto">
								This has to be the best place and the best price of all the old
								school smells that the ladies love! I purchased more than a few
								bottles and Voila! Absolutely impressed with the quality of
								their merchandise.
							</p>
						</div>
					</div>

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
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div className="card-body items-center bg-[url('../src/images/bgg.jpg')] bg-cover h-full bg-opacity-0.5 bg-transparent text-center ml-10 mr-10">
							<p className="text-2xl font-semibold mt-28 mx-auto">
								The delivery was fast and it was also securely packed when it
								came in. The packaging of the perfume itself was super nice and
								it made for a great gift to a loved one.
							</p>
						</div>
					</div>

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
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div className="card-body items-center bg-[url('../src/images/bgg.jpg')] bg-cover h-full bg-opacity-0.5 bg-transparent text-center ml-10 mr-10">
							<p className="text-2xl font-semibold mt-28 mx-auto">
								Excellent variety. I would recommend this for anyone who wants
								to try a perfume without breaking the bank or being stuck with a
								scent that you cannot stand. You can spray the card and let the
								scent dry down to get a true scent experience. With the variety,
								there will be scents you love and some you will hate.
							</p>
						</div>
					</div>

					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</styledSection>
		</section>
	);
};

export default Testimonial;
const styledSection = styled.div`
	background-image: url("../src/images/review.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-radius: 20px;
	background-shadow: rgba(0, 0, 0, 0.8) 0 0 20px;
	position: relative;
`;
const styledBox = styled.div`
	border: 1px solid black;
	border-radius: 20px;
`;
