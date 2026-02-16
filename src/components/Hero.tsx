import { motion } from 'motion/react';

import RubiksCube from './RubiksCube'
import SquaresColor from './SquaresColors-bit';
import { LayoutTextFlipColors } from './layoutTextFlipColors-bit';





export default function Hero() {

return(
<>
    <div className=' w-full h-screen bg-rubiks-blur-dark  pointer-events-none' >
            <div className="absolute z-0 w-full h-screen flex-col itens-center justify-between p-0 pointer-events-auto" >
                <SquaresColor
                    direction="diagonal"
                    speed={0.7}
                    />
            </div>

        <div className="flex items-center justify-center  h-full">

            <div className='relative flex flex-col md:flex-row  items-center justify-around gap-5 '>
                <div className='w-[50vw] z-1'>
                    <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row text-white  ">
                        <LayoutTextFlipColors
                        text="Always"
                        words={[
                            "shifting perspectives.",
                            "staying in style.",
                            "43 quintillion deep.",
                            "solving the puzzle.",
                            "an 80s icon",
                            "mathematically perfect."
                        ]}
                        colors={["text-rubik-blue", "text-rubik-red", "text-rubik-green", "text-rubik-yellow" , "text-rubik-orange", "text-black"]}
                        duration={2500}
                        />
                    </motion.div>
                </div>
                <RubiksCube />
            
            </div>
        </div>
    </div>
</>        
)
}