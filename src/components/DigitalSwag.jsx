import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

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

    return (
        <div className='flex justify-center items-center w-screen h-[100%] overflow-hidden bg-black' id='pop'>
            <div ref={divRef} className='bg-[#730cc5] rounded-lg w-[700px] mt-10 p-8 text-center'>
                <h2 className='text-2xl mb-6'>Digital Swag</h2>
                <div className='relative mb-10 bg-center bg-cover w-[400px] h-[700px] mx-auto top-[10px]' id='download' style={{backgroundImage: `url('/Dexterix 4.0 temp.png')`}}>
                    <img src={imageUrl} alt="pic" className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4' id='Pic'/>
                    <div className="absolute bottom-48 left-[50%] transform -translate-x-1/2 block w-[200px]   font-bold text-[#333]">
                        <p className="text-lg text-white glowing-text py-2">{name}</p>
                    </div>
                </div>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleNameChange} 
                    placeholder="Enter your name" 
                    className='block w-64 bg-gray-200 text-gray-800 p-3 rounded-md mb-4 mx-auto outline-none'
                />
                <label htmlFor="input-file" className='block w-64 bg-red-500 text-white p-3 rounded-md mx-auto cursor-pointer mb-4'>Upload Image</label>
                <input type="file" accept='image/jpeg, image/png, image/jpg' id='input-file' className='hidden' onChange={handleImageChange}/>
                <button onClick={handleDownload} className='block w-64 bg-red-500 text-white p-3 rounded-md mx-auto cursor-pointer mb-4'>Download</button>
            </div>
        </div>
    );
}

export default DigitalSwag;
