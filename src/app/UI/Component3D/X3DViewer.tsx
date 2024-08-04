// "use client";
// import React from "react";
// import Script from "next/script";
// import Head from "next/head";
// import "./style/X3DViever.css";



// type X3DViewerProps = {
// 	object3d?: string;
// };

// export const X3DViewer = (object3d: X3DViewerProps) => {


// 	const x3dContent = `
//     <x3d width='500px' height='450px'>
//    <scene>
// 	 		<appearance>
//               <material diffusecolor="1 0 0" ambientintensity="0.2" emissivecolor="0,0,0" shininess="0.2" specularcolor="0,0,0" transparency="0"></material>
//             </appearance>
//             <box></box>
//     </scene> 
// </x3d>
//     `;
// 	console.log(object3d)

// 	return (
// 		<>
// 			<Head>
// 				<link rel="stylesheet" type="text/css" href="http://www.x3dom.org/release/x3dom.css" />
// 			</Head>
// 			<Script src="http://www.x3dom.org/download/x3dom.js"></Script>

// 			<div dangerouslySetInnerHTML={{ __html: x3dContent }}  />
// 		</>
// 	);
// };
"use client";
import React, { useRef, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import "./style/X3DViever.css";


type X3DViewerProps = {
  object3d?: string;
  image?:string;
};

export const X3DViewer: React.FC<X3DViewerProps> = ({ object3d }) => {
  const x3dRef = useRef<HTMLDivElement>(null);
console.log(object3d)
  useEffect(() => {
    const x3dContent = `
      <x3d width='500px' height='450px'>
        <scene>
          <appearance>
            <material diffusecolor="1 0 0" ambientintensity="0.2" emissivecolor="0,0,0" shininess="0.2" specularcolor="0,0,0" transparency="0"></material>
          </appearance>
          <box></box>
        </scene>
      </x3d>
    `;
    if (x3dRef.current) {
      x3dRef.current.innerHTML = x3dContent;
    }

    return () => {
      if (x3dRef.current) {
        x3dRef.current.innerHTML = '';
      }
    };
  }, [object3d]);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="http://www.x3dom.org/release/x3dom.css" />
      </Head>
      <Script src="http://www.x3dom.org/download/x3dom.js"></Script>
      <div ref={x3dRef} />
    </>
  );
};
