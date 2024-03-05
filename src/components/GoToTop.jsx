import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const GoToTop = () => {
  const [visible, setVisible] = useState(false);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {visible && (
        <div onClick={()=>window.scrollTo({top:0,left:0,behavior:"smooth"})} className="fixed z-50 text-blue-400 text-3xl cursor-pointer animate-pulse bottom-10 right-10">
          <FaArrowCircleUp />
        </div>
      )}
    </>
  );
};
export default GoToTop;