import Image from "next/image"
import React from "react"

export default function Cards() {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <Image
                        className="w-20 mx-auto mt-[-3rem] bg-white"
                        src={"/assets/single.png"}
                        alt="single"
                        width={500}
                        height={500}
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Single user
                    </h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="bg-defaultGreen w-[200px] rounded-md font-medium ml-4 my-6 py-3  text-black">
                            Start Trial
                        </button>
                    </div>
                </div>

                <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <Image
                        className="w-20 mx-auto mt-[-3rem] bg-transparent"
                        src={"/assets/double.png"}
                        alt="single"
                        width={500}
                        height={500}
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Double user
                    </h2>
                    <p className="text-center text-4xl font-bold">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            1000 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 4 GB</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="bg-black w-[200px] rounded-md font-medium ml-4 my-6 py-3  text-defaultGreen">
                            Start Trial
                        </button>
                    </div>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <Image
                        className="w-20 mx-auto mt-[-3rem] bg-white"
                        src={"/assets/triple.png"}
                        alt="single"
                        width={500}
                        height={500}
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Triple user
                    </h2>
                    <p className="text-center text-4xl font-bold">$249</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            2500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">3 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="bg-defaultGreen w-[200px] rounded-md font-medium ml-4 my-6 py-3  text-black">
                            Start Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
