const CardUserOrder = ({
    status,
    title,
    picture,
    price,
    date,
    category
}: {
    status: string,
    title: string,
    picture: string,
    price: number,
    date: string,
    category: string
}) => {
    const getStatusStyles = () => {
        switch (status) {
            case 'جاهز':
                return 'bg-[#E4FFE4] text-[#47FF47]';
            case 'قيد التنفيذ':
                return 'bg-[#FFF4E4] text-[#FFA747]';
            case 'ملغى':
                return 'bg-[#FFE4E4] text-[#FF4747]';
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };
    return (
        <div className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-start gap-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                            <img
                                src={picture}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <p className="font-bold text-sm">{title}</p>
                            <p className="text-gray-700">${price}</p>
                            <p className="text-xs text-gray-500">{date}</p>
                        </div>
                    </div>
                    <span className="px-2 w-full text-xs rounded-full flex-center py-2 mt-1 bg-blue-100 text-blue-600">
                        {category}
                    </span>
                </div>
            </div>
            <div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};
export default CardUserOrder;