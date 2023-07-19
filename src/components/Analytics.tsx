import React from "react"
import Image from "next/image"

export default function Analytics() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <Image
                    src={"/assets/laptop.jpg"}
                    alt="Laptop"
                    width={500}
                    height={200}
                    className="w-[500px] mx-auto py-4"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-defaultGreen font-bold">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis aperiam repudiandae adipisci ipsa error vel
                        suscipit optio sed nihil libero, dolorum ea id rem
                        voluptatum odit quidem magnam impedit aliquam.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-defaultGreen">
                        {" "}
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
