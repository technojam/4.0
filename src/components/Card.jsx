import React from "react";

const Card = ({ theme }) => {
  return (
    <div className={`h-[400px] w-[300px] perspective`}>
      <div className="preserve-3d pt-[100px] w-full transition-all ease-in-out duration-500 rounded-[10px] bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center">
        <div className="h-full w-full content-box">
          <h1 className="transform-3d text-white text-2xl font-black">
            {theme.title}
          </h1>
          <p className="transform-3d h-40 pt-4 text-xs">{theme.info}</p>
          <span className="block font-black text-xs uppercase text-blue-500 pt-4 transform-3d">
            See More
          </span>
        </div>
        <div className="box-shadow bg-black p-3 rounded-lg absolute top-[75px] left-[25px] w-[60px] aspect-square">
          <span className="text-white text-center font-bold block text-xs">
            {theme.month}
          </span>
          <span className="text-blue-700 font-black text-center block text-lg">
            {theme.date}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;