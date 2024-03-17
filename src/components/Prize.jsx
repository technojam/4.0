import React, { useState } from 'react';

const Prize = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = (cardNumber) => {
    if (cardNumber === 1) setIsHovered1(true);
    else if (cardNumber === 2) setIsHovered2(true);
    else if (cardNumber === 3) setIsHovered3(true);
  };

  const handleMouseLeave = (cardNumber) => {
    if (cardNumber === 1) setIsHovered1(false);
    else if (cardNumber === 2) setIsHovered2(false);
    else if (cardNumber === 3) setIsHovered3(false);
  };

  return (
// <<<<<<< HEAD
    <>
    <h1 className="paragraph text-3xl self-center lg:text-4xl font-bold leading-9 text-[#daa520] pb-4 left-[45%] relative m-10">
          Prize
        </h1>
{/* ======= */}
   {/* <>
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
>>>>>>> a4306f1cec3a2049d5b18ab39b87e917aeea9078 */}
      <div style={{
        display: 'flex',
        gap: '80px', justifyContent: 'center',
        height:'80vh',
      }}>
        <div
          className={`font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card ${isHovered1 ? 'scale-110' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          style={{ width: '200px', height: '300px', backgroundPosition: 'top', borderRadius: '15px' }}
        >
          <div className='font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card' style={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?w=740&t=st=1710599229~exp=1710599829~hmac=8aa3d71315fe1c9f689737b151df25579b3fb8914f7f880bb3cd8f64b11c6868)',
            width: '200px',
            height: '300px',
            backgroundPosition: 'top',
            borderRadius: '15px',
          }}></div>
          <div className="content" style={{ background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)', position: 'relative', left: '15px',top: '-20px', borderRadius: '15px', boxShadow: 'blur(10px)', height: '70px', color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>
            <h3>🏆2nd Prize🏆<br />₹15000</h3>
          </div>
        </div>
        <div
          className={`font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card ${isHovered2 ? 'scale-110' : ''}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={{ width: '300px', height: '400px', backgroundPosition: 'top', borderRadius: '15px' }}
        >
          <div className='font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card' style={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?w=740&t=st=1710599229~exp=1710599829~hmac=8aa3d71315fe1c9f689737b151df25579b3fb8914f7f880bb3cd8f64b11c6868)',
            width: '300px',
            height: '400px',
            backgroundPosition: 'top',
            borderRadius: '15px',
          }}></div>
          <div className="content" style={{ background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)', position: 'relative',left: '15px', top: '-20px', borderRadius: '15px', boxShadow: 'blur(10px)', height: '100px', color: 'white', fontSize: '2rem', textAlign: 'center' }}>
            <h2>🏆First Prize🏆<br />₹21000</h2>
          </div>
        </div>
        <div
          className={`font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card ${isHovered3 ? 'scale-110' : ''}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          style={{ width: '200px', height: '300px', backgroundPosition: 'top', borderRadius: '15px' }}
        ><div className='font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition duration-300 hover:shadow-xl relative card' style={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/shiny-golden-number-one-winner-symbol-with-laurel-design-vector_1017-45560.jpg?w=740&t=st=1710599229~exp=1710599829~hmac=8aa3d71315fe1c9f689737b151df25579b3fb8914f7f880bb3cd8f64b11c6868)',
          width: '200px',
          height: '300px',
          backgroundPosition: 'top',
          borderRadius: '15px',
        }}></div>
          <div className="content" style={{ background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)', position: 'relative', left: '15px', top: '-20px', borderRadius: '15px', boxShadow: 'blur(10px)', height: '70px', color: 'white', fontSize: '1.5rem', textAlign: 'center', }}>
            <h3>🏆3rd Prize🏆<br />₹10000</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prize;
