import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { BiDownload, BiImageAdd, BiShareAlt } from "react-icons/bi";

const DigitalSwag = () => {
    const [imageUrl, setImageUrl] = useState('/pic.png');
    const [name, setName] = useState('');
    const divRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDownload = () => {
        html2canvas(divRef.current.querySelector('#download')).then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            const fileName = `digital_swag_${name || 'anonymous'}.png`; 
            const link = document.createElement('a');
            link.download = fileName;
            link.href = image;
            link.click();
        });
    }
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Digital Swag',
                    text: 'Check out this digital swag!',
                    url: imageUrl 
                });
            } catch (error) {
                console.error('Error sharing:', error.message);
            }
        } else {
            console.log('Web Share API not supported');
        }
    }

    return (
        <div className='flex justify-center items-center w-screen min-h-screen' id='pop'>
            <div ref={divRef} className='bg-gradient-to-r from-blue-900 to-red-500 rounded-lg lg:w-full lg:h-screen p-4 lg:p-8 text-center'>
                <h1 className='lg:text-[4rem] text-[2rem] mb-6 mx-44 px-5 relative lg:left-48'>Digital Swag</h1>
                <p className='relative mb-10 lg:right-10 lg:text-[2rem] lg:mx-[200px] lg:left-[200px] lg:px-5 px-[100px] text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint placeat ad a, eaque nesciunt beatae nostrum ducimus cum similique. Labore, vel doloremque. Necessitatibus rem commodi recusandae, esse earum expedita.</p>
                <div className='lg:absolute relative mb-10 bg-center bg-cover w-[300px] h-[500px] lg:w-[30vw] lg:h-[85vh]  lg:top-[30px] left-[19%] lg:left-5 border-2' id='download' style={{backgroundImage: `url('/Dexterix 4.0 temp.png')`}}>
                    <img src={imageUrl} alt="pic" className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 lg:w-48 h-36 lg:h-48 border-4' id='Pic'/>
                    <div className="absolute bottom-32 lg:bottom-28 left-[50%] transform -translate-x-1/2 block w-[200px]   font-bold text-[#333]">
                        <p className=" text-lg text-white glowing-text py-2">{name}</p>
                    </div>
                </div>
                

                <input 
                    type="text" 
                    value={name} 
                    onChange={handleNameChange} 
                    placeholder="Enter your name" 
                    className='block w-[250px] lg:w-[400px] bg-gray-200 text-gray-800 p-3 rounded-md mb-4 mx-[23%] lg:mx-[45%] outline-none text-center border-black border-2'
                />
                <div className='lg:flex flex-row mx-[28%] justify-center items-center gap-10 relative  lg:left-36'>

                <label htmlFor="input-file" className='block w-48  text-white p-3 rounded-md bg-black cursor-pointer mb-4 border-white border-2 border-dashed flex justify-center items-center gap-1'><BiImageAdd />Upload Image</label>
                <input type="file" accept='image/jpeg, image/png, image/jpg' id='input-file' className='hidden' onChange={handleImageChange}/>
                <button onClick={handleDownload} className=' w-48 bg-black text-white p-3 rounded-md cursor-pointer mb-4 text-center flex justify-center items-center gap-1 border-2'><BiDownload className='text-2'/>Download</button>
                <button onClick={handleShare} className='w-48 bg-black text-white p-3 rounded-md cursor-pointer mb-4 text-center flex justify-center items-center gap-1 border-2'><BiShareAlt className='text-2'/>Share</button>
                </div>
                
            </div>
        </div>
    );
}

export default DigitalSwag;
