"use client";
import React, { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
import { Carousel } from "carousel";
// import "react-carousel-extended/lib/styles/carousel.min.css"; // requires a loader
import "./styles/carousel.css";
import { X3DViewer } from "../VieverModel3d/X3DViewer";

// todo need use module.css not .css

interface imageCarouselProps {
	images: { url: string; alt: string; type: string }[];
	object3d?:string;
	testput?:string;

}

export const ImageCarousel: React.FC<imageCarouselProps> = ({ images,testput }) => {
	const [thumbWidth, setThumbWidth] = useState(100);

	const var1 = useMediaQuery({ minWidth: 2300 });
	const var2 = useMediaQuery({ minWidth: 2100 });
	const var3 = useMediaQuery({ minWidth: 1900 });
	const var4 = useMediaQuery({ minWidth: 1700 });
	const var5 = useMediaQuery({ minWidth: 1500 });
	const var6 = useMediaQuery({ minWidth: 1300 });
	const var7 = useMediaQuery({ minWidth: 1100 });
	const var8 = useMediaQuery({ minWidth: 900 });
	const var9 = useMediaQuery({ minWidth: 768 });
	// const toggleTumbnail = useMediaQuery({ minWidth: 200, maxWidth: 500 });

	useEffect(() => {
		if (var1) {
			setThumbWidth(160); // значение для десктопа
		} else if (var2) {
			setThumbWidth(140);
		} else if (var3) {
			setThumbWidth(130);
		} else if (var4) {
			setThumbWidth(120);
		} else if (var5) {
			setThumbWidth(110);
		} else if (var6) {
			setThumbWidth(100);
		} else if (var7) {
			setThumbWidth(90);
		} else if (var8) {
			setThumbWidth(80);
		} else if (var9) {
			setThumbWidth(70);
		}
	}, [var1, var2, var3, var4, var5, var6, var7, var8, var9]);

	return (
		<Carousel
			// className={css.image_wrapper}
			axis="horizontal"
			showThumbs={true}
			showIndicators={false}
			stopOnHover={true}
			emulateTouch={true}
			thumbWidth={thumbWidth}
			swipeable={true}
			showArrows={true}
		>
			{/* {images.map((image, index) => (
				<img
					key={index}
					src={image.url}
					alt={image.alt}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			))} */}
			{images.map((image, index) => (
				<div key={index} style={{ width: "100%", height: "100%" }}>
					{image.type === "image" ? (
						<img
							src={image.url}
							alt={image.alt}
							style={{ width: "99%", height: "100%", objectFit: "cover", borderRadius: "5%" }}
						/>
					) : (
						// <div className="takeImageForDisplaying">
						// 	<X3DViewer />
						// </div>
						<p>{testput}</p>
					)}
				</div>
			))}
		</Carousel>
	);
};

