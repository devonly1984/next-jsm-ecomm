import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
	const { smallText, midText, buttonText, desc, image, largeText1, product } =
		heroBanner;
	return (
		<div className="hero-banner-container">
			<div className="">
				<p className="beats-solo">{smallText}</p>
				<h3>{midText}</h3>
				<h1>{largeText1}</h1>
				<img
					src={urlFor(image)}
					alt="headphones"
					className="hero-banner-image"
				/>
				<div className="">
					<Link href={`/product/${product}`}>
						<button> {buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
