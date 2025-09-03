import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CustomSlider() {
    
    const [currentIndex , setCurrentIndex] = useState(0)
     
    const CustomeSliderContent = [
         
        'https://images7.alphacoders.com/130/1301536.jpg',
        'https://img.playstationtrophies.org/images/monthly_2024_01/screenshots/18034/tk8_zafina_battle1_f89beff9-6c30-4b4f-a66f-7c9a5eaa3305.jpg',
        'https://gamingtrend.com/wp-content/uploads/2022/12/law.jpg',
        'https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Screenshots_V1/Panda/Panda-screenshot-2.jpg',
        'https://gamingbolt.com/wp-content/uploads/2024/01/Tekken-8-Reina.jpg'
        
     ]


    const handleNextClick = ()=>{
       
        const isLastSlide = currentIndex === CustomeSliderContent.length-1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex)
 
    }

    const handlePrevClick = () =>{
         
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? CustomeSliderContent.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const handleThunmNailClick = (index) => {
        
        setCurrentIndex(index)
    }


  return (

        <div className='flex flex-wrap lg:flex-nowrap gap-x-5 pt-10 sm:pt-20 pb-0 sm:pb-4'>
           
           <div className='relative w-full lg:max-w-[85%]'>

            <div>
            <img src={CustomeSliderContent[currentIndex]} alt={`Slide ${currentIndex}`} className='rounded-xl'/>
            </div>

            <button className='bg-[#f6f5f567] rounded-full p-2 absolute top-1/2 left-5 min-[490px]:left-10 hover:bg-white'>
            <IoIosArrowBack className='text-xs sm:text-sm lg:text-xl '
            onClick={handlePrevClick} />
            </button>

            <button className='bg-[#f6f5f55a] rounded-full p-2 absolute top-1/2 right-5 min-[490px]:right-10 hover:bg-white'>
            <IoIosArrowForward className='text-xs sm:text-sm lg:text-xl ' 
            onClick={handleNextClick}/>
            </button>
            </div>

            <div className='hidden sm:flex flex-row justify-between pt-5 lg:pt-0 lg:max-w-[15%] 2xl:pt-0 lg:flex-col gap-y-0 gap-x-4 md:gap-y-2.5'>
           { CustomeSliderContent.map((image, index) => ( 
            
            <div key={index} className='max-w-[16vw] w-full' onClick={()=>handleThunmNailClick(index)}>

                <img src={image}
                alt={`Thumbnail ${index}`} 
                className={`rounded-md cursor-pointer ${currentIndex === index ? 'border-2 border-white' : ''}`}
                />
            </div>
            ))}
           </div>


        </div>
      
  )
}
