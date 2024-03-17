import React, { useState } from 'react';


const Prize = () => {
  const [bounds, setBounds] = useState(null);
  const [cardStyles, setCardStyles] = useState({});
  const [glowStyles, setGlowStyles] = useState({});

  const handleMouseEnter = () => {
    const card = document.querySelector('.card');
    const newBounds = card.getBoundingClientRect();
    setBounds(newBounds);
    document.addEventListener('mousemove', rotateToMouse);
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', rotateToMouse);
    setCardStyles({});
    setGlowStyles({});
  };

  const rotateToMouse = (e) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    const cardStyle = {
      transform: `perspective(900px)
                  rotateY(${(center.x / bounds.width) * 15}deg)
                  rotateX(${(-center.y / bounds.height) * 15}deg)
                  scale3d(1.07, 1.07, 1.07)`
    };
    const glowStyle = {
      backgroundImage: `radial-gradient(circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000)`
    };

    setCardStyles(cardStyle);
    setGlowStyles(glowStyle);
  };

  return (
   <>
    <div id='prize' style={{
      display: 'flex',
      gap: '80px', justifyContent: 'center',
      // height: '70vh'
    }}>
    <div
      className="font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card"
      style={{
        ...cardStyles,
        width: '200px',
        height: '300px',
        backgroundPosition: 'top',
        borderRadius: '15px',
        backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?t=st=1710600072~exp=1710600672~hmac=78fae018d9611e16c0f65bdf3d61601e6c1b6eaeaf0c8609fe2b2dd97bea362f)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)',
        position: 'relative',
        top: '250px',
        borderRadius: '15px',
        boxShadow: 'blur(10px)',
        height: '100px',
        color:'white',
        fontSize:'1.5rem',
        textAlign: 'center',
      }}><h3>🏆2nd Prize🏆<br />₹15000</h3></div>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ ...glowStyles, backgroundBlendMode: 'overlay' }}
      ></div>
    </div>
    <div
      className="font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card"
      style={{
        ...cardStyles,
        width: '300px',
        height: '400px',
        backgroundPosition: 'top',
        borderRadius: '15px',
        backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?w=740&t=st=1710599229~exp=1710599829~hmac=8aa3d71315fe1c9f689737b151df25579b3fb8914f7f880bb3cd8f64b11c6868)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)',
        textAlign:'center',
        position: 'relative',
        top: '320px',
        borderRadius: '15px',
        boxShadow: 'blur(10px)',
        height: '100px',
        color:'white',
        fontSize:'2rem',

      }}><h2>🏆First Prize🏆
        <br />₹21000</h2></div>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ ...glowStyles, backgroundBlendMode: 'overlay' }}
      ></div>
    </div>
    
    <div
      className="font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card"
      style={{
        ...cardStyles,
        width: '200px',
        height: '300px',
        backgroundPosition: 'top',
        borderRadius: '15px',
        backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?w=740&t=st=1710599229~exp=1710599829~hmac=8aa3d71315fe1c9f689737b151df25579b3fb8914f7f880bb3cd8f64b11c6868)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)',
        position: 'relative',
        top: '250px',
        borderRadius: '15px',
        boxShadow: 'blur(10px)',
        height: '100px',
        color:'white',
        fontSize:'1.5rem',
        textAlign: 'center',
      }}><h3>🏆3rd Prize🏆 <br />₹10000</h3>
      </div>
      
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ ...glowStyles, backgroundBlendMode: 'overlay' }}
      ></div>
    
    </div>

    </div>
    <div></div>
    {/* <div className='h-[20'></div> */}
      <div className='h-[200px] relative top-14 p-10 mb-[100px] w-[800px] ml-[20%] text-center text-xl  bg-grey rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 text-white'>
       <span className='z-10'>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>  <br />
       <span>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>  <br />
       <span>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>  
        
      </div>
    </>
    
    
  );
}

export default Prize;