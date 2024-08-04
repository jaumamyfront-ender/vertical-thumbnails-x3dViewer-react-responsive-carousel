import React from "react";

interface ImageCarouselProps {
  image: string;
  key:any;
}

export default function ReturnImagesChildren({ image,key }: ImageCarouselProps) {
  console.log(typeof image)
  return <div style={{ width: "99%", height: "100%", objectFit: "cover", borderRadius: "5%" }}><img
  src={image}
  alt={""}
  style={{
    width: "99%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5%",
  }}
/></div>;
}
