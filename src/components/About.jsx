
const About = () => {
  return (
    <div id="about" className="px-10">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row py-40 gap-20 items-center">
                {/* left */}
            <div className="relative">
                <img className="absolute h-1/4 top-0 left-0 -z-10" src="../../img/dots.png" alt="" />
                <div className="h-full rounded-full overflow-hidden">
                    <img src="../../img/portrait.png" alt="" />
                </div>
            </div>
                {/* Right */}
                <div className="my-auto flex flex-col gap-3">
                    <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
                    <h1 className="text-3xl font-medium">Better Developer</h1>
                    <h1 className="text-3xl font-medium">Better Experience</h1>
                    <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus quaerat voluptatibus quas cum, id veniam placeat vitae officiis dignissimos, explicabo doloribus numquam tempore soluta! Aspernatur eos maiores sit sint.</p>
                    <h2 className="text-gray-400 font-medium">HTML</h2>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                    <h2 className="text-gray-400 font-medium">Javascript</h2>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-4/5 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div><h2 className="text-gray-400 font-medium">React</h2>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About