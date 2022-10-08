import React from 'react'

const PortfolioItem = () => {
    return (
        <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1">
                    <img src="../../img/item.png"/>
                    </div>
    )
}

const Portfolio = () => {
  return (
    <div id='portfolio' className='py-40 dark:bg-slate-900'>
        <div className="container mx-auto">
            <div className='flex flex-col gap-3 items-center'>
                <h1 className='text-indigo-600 font-bold'>PORTFOLIO</h1>
                <h1 className='text-3xl dark:text-white'>Works & Projects</h1>
                <p className='w-1/2 text-center text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequuntur maiores ratione labore dolorem dolor doloremque totam saepe, dolorum, numquam, dolore ad sed error ea nemo nihil rem praesentium.</p>
            </div>
            <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                </div>
            </div>
        </div>
  )
}

export default Portfolio