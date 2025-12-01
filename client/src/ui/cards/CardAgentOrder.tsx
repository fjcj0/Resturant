import { IoCheckmark } from "react-icons/io5";
import { FiXCircle } from "react-icons/fi";
const CardAgentOrder = ({
    picture,
    title,
    price,
    date,
    category,
    status,
    userPicture,
    userName
}: {
    date: string,
    price: number,
    title: string,
    category: string,
    picture: string,
    userPicture: string,
    status: string,
    userName: string
}) => {
    return (
        <div className="grid grid-cols-4 place-items-center place-content-center px-3">
            <div className="flex items-start justify-start gap-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-3">
                        <div className="w-12 h-12 max-md:hidden  rounded-lg overflow-hidden">
                            <img
                                src={picture}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <p className="font-bold text-sm">{title}</p>
                            <p className="text-gray-700">${price}</p>
                        </div>
                    </div>
                    <span className="px-2 text-center w-full text-xs rounded-full flex-center py-2 mt-1 bg-blue-100 text-blue-600">
                        {category}
                    </span>
                </div>
            </div>
            <div className="flex-center gap-2">
                <div className="overflow-hidden rounded-full max-md:hidden ">
                    <img src={userPicture} alt={userName} className="w-14 h-14 object-cover" />
                </div>
                <p className="text-xs">{userName}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500">{date}</p>
            </div>
            {
                status === 'قيد التنفيذ' ? (
                    <div className="flex-start gap-2">
                        <button type="button" className="w-8 h-8 flex-center bg-[#E4FFE4] text-[#47FF46] rounded-full"><IoCheckmark className="w-4 h-4" /></button>
                        <button type="button" className="w-8 h-8 flex-center bg-[#FFE4E4] text-[#FF4747] rounded-full"><FiXCircle className="w-4 h-4" /></button>
                    </div>
                ) : (
                    <div className="">
                        {
                            status === 'ملغى' && <p className="px-4 py-2 bg-[#FFE4E4] text-[#FF4747] rounded-full text-xs">{status}</p>
                        }
                        {
                            status === 'جاهز' && <p className="px-4 py-2 bg-[#E4FFE4] text-[#47FF46] rounded-full text-xs">{status}</p>
                        }
                    </div>
                )
            }
        </div>
    );
}
export default CardAgentOrder;