import { useLocation } from "react-router";
import type { LinksProps } from "../global";
import LinkDashbaord from "../ui/links/LinkDashboard";
import Time from "./Time";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import Line from "../ui/sahpes/Line";
import useSlideStore from "../store/SlideStore";
import { FaRegCircleXmark } from "react-icons/fa6";
const Slider = ({
    links
}: {
    links: LinksProps[]
}) => {
    const location = useLocation();
    const { isSlideOpen, toggleSlide } = useSlideStore();
    return (
        <aside className={`w-full h-full overflow-y-auto flex flex-col pt-6 bg-bg-color`}>
            <div className={`flex-start px-3 w-full mb-5 gap-1 font-bold text-lg`}>
                <div className="flex-between w-full">
                    <div className="flex-center gap-1">
                        <div className={`${!isSlideOpen && 'hidden'}`}>
                            <Line />
                        </div>
                        <div className="flex-center">
                            <p className={`${!isSlideOpen && 'hidden'}`}>لوحة التحكم</p>
                            <TbLayoutDashboardFilled />
                        </div>
                    </div>
                    <div className={`md:hidden ${isSlideOpen ? 'max-md:block' : 'max-md:hidden'}`}>
                        <button type="button" onClick={toggleSlide}>
                            <FaRegCircleXmark />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {
                    links.map((link, index) => {
                        const isActive = link.direct === location.pathname;
                        return (
                            <LinkDashbaord
                                key={index}
                                direct={link.direct}
                                text={link.text}
                                isActive={isActive}
                                icon={link.icon}
                            />
                        );
                    })
                }
            </div>
            <div className={`my-auto h-full p-5 flex flex-col items-center justify-end ${!isSlideOpen && 'hidden'} `}>
                <Time />
            </div>
        </aside>
    );
}
export default Slider;