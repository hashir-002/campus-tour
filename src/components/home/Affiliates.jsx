import React from 'react'

const Affiliates = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 p-8 no-scrollbar'>
            <div>
                <h1 className='text-3xl font-bold text-center text-sand-shadow'>Our Affiliates</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 text-center">
                <div className="h-auto flex justify-center items-center rounded"> <img src="https://jits.ac.in/wp-content/uploads/2023/03/image_2023_03_14T13_01_19_962Z.png" alt="" className='h-20'/> </div>
                <div className="h-auto flex justify-center items-center rounded"> <img src="https://jits.ac.in/wp-content/uploads/2022/08/NBA.png" alt="" className='h-20'/> </div>
                <div className="h-auto flex justify-center items-center rounded"> <img src="https://jits.ac.in/wp-content/uploads/2021/08/Jits_Naac-1-150x150.png" alt="" className='h-20'/> </div>
                <div className="h-auto flex justify-center items-center rounded"> <img src="https://jits.ac.in/wp-content/uploads/2021/08/jntuh-300x300.png" alt="" className='h-20'/> </div>
                <div className="h-auto flex justify-center items-center rounded"> <img src="https://jits.ac.in/wp-content/uploads/2021/08/iso-300x300.png" alt="" className='h-20'/> </div>
            
            
            </div>
        </div>
    )
}

export default Affiliates