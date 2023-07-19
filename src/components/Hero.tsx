import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-defaultGreen font-bold p-2">
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Grow with data.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:5xl sm:4xl xl font-bold py-4">
                        Fast, flexible, financig for
                    </p>
                    <TypeAnimation
                        sequence={["BTB", 2000, "BTC", 2000, "SASS", 2000]}
                        wrapper="p"
                        speed={5}
                        className="md:5xl sm:4xl xl font-bold md:pl-4 pl-1 text-gray-400"
                        repeat={Infinity}
                    />
                </div>
                <p className="md:2xl xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue BTB, BTC &
                    SASS platforms.
                </p>

                <button className="bg-defaultGreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    Get Started
                </button>
            </div>
        </div>
    )
}
