import PinkCircle from "./PinkCircle"

export default function Video() {
    return (
        <div className="w-full border-t-1  border-t-fuchsia-600">
            <div className="w-8/10 mx-auto px-25 py-15 max-xl:p-10 max-md:p-5 max-md:w-9/10 border-x-1 border-x-fuchsia-600 relative flex flex-col items-center">
                <PinkCircle />
                {/* main content */}
                <div> <video autoPlay loop muted > <source src="./VID1.mp4" type="video/mp4" /></video></div>
            </div>
        </div>
    )
}