import Image from "next/image";
import { ImageCarousel } from "./MainPage/MainPage";


export default function Home() {
 
  return (
    <div className="wrapper-carousel-image">
   <ImageCarousel testput="yes" 	images={[
				
						...[
							{
								url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
								alt: "string",
								type: "image",
							},
							{
								url: "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg",
								alt: "string",
								type: "image",
							},
							{
								url: "https://cdn.pixabay.com/photo/2023/08/19/13/12/fern-8200455_640.jpg",
								alt: "string",
								type: "image",
							},
							{
								url: "https://cdn.pixabay.com/photo/2024/03/07/22/56/woman-8619512_1280.jpg",
								alt: "string",
								type: "image",
							},
							{
								url: "https://cdn.pixabay.com/photo/2024/03/07/22/56/woman-8619512_1280.jpg",
								alt: "string",
								type: "",
							},
						
							
						],
					]}
					/>
    </div>
  
  );
}
