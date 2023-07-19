import React from "react"

export default function Newsletter() {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sing up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            type="email"
                            placeholder="Entrer Email"
                            className="p-3 flex w-full rounded-md text-black"
                        />
                        <button className="bg-defaultGreen w-[200px] rounded-md font-medium ml-4 my-6 py-3 text-black">
                            Notify-me
                        </button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our
                        <span className="text-defaultGreen">
                            Privacy Policy.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
