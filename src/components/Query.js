import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";





const Query = ({query}) => {
    let {id,title,info}=query;
    let [expand,setExpand]=useState(false)

  return (
    <aside role='query' className="my-4 shadow-md p-4 border-solid border-[#e2e8f0] border-[2px] rounded">
      <div className="peak flex justify-between items-center">
        <h2 className="text-md font-medium tracking-wide text-gray-700 md:text-lg">
          {title}
        </h2>
        <button
          onClick={() => setExpand(!expand)}
          role='expand'
          className="min-w-[30px] min-h-[30px] w-[30px] h-[30px] bg-sky-950 flex justify-center items-center !text-white rounded-full"
        >
          {expand ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {expand && <div role='info' className="base mt-3 text-sm text-gray-500">{info}</div>}
    </aside>
  );
}

export default Query