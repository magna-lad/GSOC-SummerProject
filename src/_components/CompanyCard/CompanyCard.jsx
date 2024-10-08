import React from "react";

export default function CompanyCard({image,heading,description,qualities,faction}){
    return(
        

<div class="max-w-sm  border border-[#282D45] rounded-[10px] shadow bg-[#0E1330] dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-5 w-full  h-48 object-cover" src={image} alt="" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{heading}</h5>
        </a>
        <p class=" font-normal text-[#8F9BB7] dark:text-gray-400">{description}</p>
        <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        

        {/* tags */}
        <div className="flex gap-3 w-auto">
        {qualities.map((quality, index) => (
            <button
              key={index}
              className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center"
            >
              {quality}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
            <p className="text-[#8F9BB7]">{faction}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-xl text-center text-white ">
                Analysis
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        
    </div>
</div>

    );
}

// to-slate-200




// import React from "react";

// export default function CompanyCard({ image, heading, description, qualities, faction }) {
//   return (
//     <div className="max-w-sm border border-[#282D45] rounded-lg shadow bg-[#0E1330] dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg p-5" src={image} alt="" />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {heading}
//           </h5>
//         </a>
//         <p className="font-normal text-[#8F9BB7] dark:text-gray-400">{description}</p>
//         <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

//         {/* Tags */}
//         <div className="flex gap-3 w-auto">
//           {qualities.map((quality, index) => (
//             <button
//               key={index}
//               className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         <div className="flex justify-between items-center">
//           <p className="text-[#8F9BB7]">{faction}</p>
//           <a href="#" className="inline-flex items-center px-3 py-2 text-xl text-center text-white ">
//             Analysis
//             <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }