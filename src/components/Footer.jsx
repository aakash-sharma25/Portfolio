import Social from "./Social"

const Footer = () => {
    const date =new Date();
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
         className=" mt-20 py-10 flex flex-col gap-20 items-center justify-center bg-slate-100">

            <div className="mt-5 flex ">

                <Social />
                
            </div>
                <div className="text-center">
                    <p className="text-xl text-gray-500">© {date.getFullYear()} Aakash Sharma . All rights reserved.</p>
                </div>

        </div>
    )
}

export default Footer