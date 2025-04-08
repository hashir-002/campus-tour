import React from 'react'
import library from '../../assets/library_4.jpg'
import canteen from '../../assets/Canteen.jpg'
import verenda from '../../assets/verenda.jpg'
import lab1 from '../../assets/labs.jpg'
import { Link } from 'react-router-dom'

const Places = () => {

    const places = [
        {
            name: "Library",
            image: library,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
            link: "/library"
        },
        {
            name: "canteen",
            image: canteen,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
            link: "/canteen"
        },
        {
            name: "verenda",
            image: verenda,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
            link: "/verenda"
        },
        {
            name: "labs",
            image: lab1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
            link: "/labs"
        },


    ]
    return (
        < >
            <div className='flex justify-center items-center mt-8 mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold text-night-shadow'>View our places</h1>
            </div>
            <div className='flex space-x-4 p-5 overflow-x-scroll scrollbar-hide '>
                {places.map((place, index) => (
                    <Link to={place.link} className="group relative max-w-md min-w-sm block bg-black">
                        <img
                            alt=""
                            src={place.image}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium tracking-widest text-sand uppercase"> {place.name} </p>
            
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        {place.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Places