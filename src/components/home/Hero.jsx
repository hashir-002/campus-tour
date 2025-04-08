import React from 'react'

const Hero = () => {
    return (
        <section className="bg-night-shadow lg:grid lg:h-2/3 lg:place-content-center dark:bg-gray-900">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-xl font-bold sm:text-5xl text-white">
                        Discover the Vibrant
                        <strong className="text-sand-shadow"> Campus Life </strong>
                        at Jyothishmathi Institute of Technology & Science
                    </h1>

                    <p className="mt-4 text-base text-pretty text-sand sm:text-lg/relaxed dark:text-gray-200">
                        Take a closer look at the heart of JITS—where learning meets life. Explore our modern labs, spacious classrooms,through an immersive tour designed to give you a real feel.
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-sand-shadow bg-sand px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-sand-shadow"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-sand shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero