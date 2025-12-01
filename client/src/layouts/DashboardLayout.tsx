import Slider from "../components/Slider";
import type { LinksProps } from "../global";
import { Outlet } from "react-router-dom";
import useSlideStore from "../store/SlideStore";
import { GrList } from "react-icons/gr";
const DashboardLayout = ({
    links
}: {
    links: LinksProps[],
}) => {
    const { toggleSlide, isSlideOpen } = useSlideStore();
    return (
        <div className="w-full min-h-screen">
            <div className={`fixed h-screen z-40 ${!isSlideOpen ? 'w-0' : 'w-[18rem]'} ${!isSlideOpen ? 'md:w-[4rem]' : 'md:w-[18rem]'} right-0 duration-300 transition-all`}>
                <Slider links={links} />
            </div>
            <div className={`absolute ${!isSlideOpen && 'w-[100%]'} ${!isSlideOpen ? 'md:w-[calc(100%-4rem)]' : 'md:w-[calc(100%-18rem)]'} p-3 min-h-screen left-0 duration-300 transition-all`}>
                <button type="button" className="mb-3" onClick={toggleSlide}>
                    <GrList className="w-6 h-6" />
                </button>
                <Outlet />
            </div>
        </div >
    );
}
export default DashboardLayout