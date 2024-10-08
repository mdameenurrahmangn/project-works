const HeroSection = () => {
    return (
        <>
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="h-[505] bg-red-800">Card-1</div>
                    <div className="h-[505] bg-green-800">Card-2</div>
                    <div className="h-[505] bg-blue-800">Card-3</div>
                    <div className="h-[505] bg-pink-400">Card-4</div>
                </div>
            </div>


        </>
    )
}

export default HeroSection