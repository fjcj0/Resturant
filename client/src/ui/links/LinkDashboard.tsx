import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import useSlideStore from "../../store/SlideStore";
const LinkDashboard = ({
    isActive,
    direct,
    text,
    icon: IconComponent
}: {
    isActive: boolean;
    direct: string;
    text: string;
    icon: IconType;
}) => {
    const { isSlideOpen } = useSlideStore();
    return (
        <Link
            to={direct}
            className={`relative text-sm ${isActive ? 'text-text-primary-active bg-primary/20' : 'text-text-primary-unactive font-medium'} gap-2 py-3  flex w-full items-start justify-start duration-300 transition-all`}>
            {
                isActive &&
                <div className="absolute right-0 bottom-[2px] w-[6.5px] h-[90%] bg-primary rounded-l-full" />
            }
            <div className="pr-5 flex gap-2 items-center justify-center">
                <IconComponent className={`w-4 h-4 ${isActive && 'text-primary'}`} />
                <span className={`${isSlideOpen
                    ? 'opacity-100 max-w-[200px]'
                    : 'opacity-0 max-w-0'
                    } duration-300 transition-all overflow-hidden whitespace-nowrap`}>
                    {text}
                </span>
            </div>
        </Link>
    );
};
export default LinkDashboard;