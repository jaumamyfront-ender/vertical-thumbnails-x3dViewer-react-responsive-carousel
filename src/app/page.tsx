import Image from "next/image";
import { ImageCarousel } from "./LayoutsOfPagesAll/MainPage";


export default function Home() {
const xc ="https://www.freeiconspng.com/uploads/3d-icon-0.png"
  return (
    <div className="wrapper-carousel-image">
   <ImageCarousel  	
								 images={[
				
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
						
							
						],
					]}
					/>
    </div>
  
  );
}
