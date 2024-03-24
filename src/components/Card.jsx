import React from "react";


const Card = ({ theme }) => {
  return (
    <div className="h-[400px] w-[300px] perspective relative customRotate">
      <div className="preserve-3d pt-[100px] w-full transition-all ease-in-out duration-500 rounded-[10px] bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center inline-block">
        <div className="h-full w-full content-box">
          <h1 className="transform-3d text-[#daa520] text-2xl font-black">
            {theme.title}
          </h1>
          <p className="transform-3d h-40 pt-4 text-sm">{theme.info}</p>
        </div>
        <div className="box-shadow bg-black pl-[5px] pt-[3px] rounded-lg absolute top-[75px] left-[25px] w-[60px] h-[60px]">
         {<theme.logo className="text-white text-5xl"/>}
        </div>
      </div>
    </div>
  );
};

export default Card;