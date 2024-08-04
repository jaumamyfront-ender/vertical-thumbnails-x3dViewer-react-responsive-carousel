"use client";
import React, { Children, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../UI/styles/carousel.css"; //custom styles
import ReactPlayer from "react-player";
import ReturnImagesChildren from "../UI/ComponentImages/ReturnImagesChildren";
import { X3DViewer } from "../UI/Component3D/X3DViewer";

// todo need use module.css not .css

interface imageCarouselProps {
  images: { url: string; alt: string; type: string }[];
  object3d?: string;
  xc:string;
}

export const ImageCarousel: React.FC<imageCarouselProps> = ({ images }) => {
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
 
  const customRenderItem = (item:any, props:any) => (
    <item.type {...item.props} {...props} />
  ); 

   
    const customRenderThumb = (data:any) => {
      const extractImages = (data:any) => {
          let images:any = [];
  
          const extractFromElement = (element:any) => {
              if (element.props && element.props.image) {
                  images.push(element.props.image);
              }
          };
  
          data.forEach(item => {
              if (Array.isArray(item)) {
                  item.forEach(subItem => extractFromElement(subItem));
              } else {
                  extractFromElement(item);
              }
          });
  
          return images;
      };
  
      const images = extractImages(data);
  
      return images.map((image) => {
          return <img src={image} />;
      });
  };


  return (
    <Carousel renderItem={customRenderItem}  renderThumbs={customRenderThumb } 	axis="horizontal"
    showThumbs={true}
    showIndicators={false}
    stopOnHover={true}
    emulateTouch={true}
    thumbWidth={thumbWidth}
    swipeable={true}
    showArrows={true} >
  {images.map((image, index) => (
        <ReturnImagesChildren key={index} image={image.url} />
      ))}
      <X3DViewer object3d="yourrrrrrrr" image="https://www.freeiconspng.com/uploads/3d-icon-0.png"/>
    </Carousel>
  );
};

//try get thumb from children
//or add both map