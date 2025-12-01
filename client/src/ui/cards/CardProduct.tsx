import Button from "../buttons/Button";
const CardProduct = ({
    title,
    price,
    description,
    category,
    picture
}: {
    title: string,
    price: number,
    description: string,
    category: string,
    picture: string
}) => {
    return (
        <div className="flex-center flex-col gap-3 p-3 bg-[#E8EAEC] rounded-lg">
            <div className="flex-center text-xs flex-col gap-1 w-full">
                <div className="flex items-center justify-between w-full relative ">
                    <p className="flex-1 text-start">{category}</p>
                    <div className="-mt-12">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <img
                                src={picture}
                                alt={title}
                                className="w-16 h-16 object-cover rounded-full border-4 border-white"
                            />
                        </div>
                    </div>
                    <p className="flex-1 text-end">{price} ₪</p>
                </div>
                <div className="w-full text-center">
                    <p className="font-bold text-lg">{title}</p>
                </div>
            </div>
            <div className="flex-center flex-col gap-2">
                <p className="text-xs text-center text-gray-600 leading-relaxed">{description}</p>
                <Button title={'شراء'} onPress={() => console.log('')} isLoading={false} />
            </div>
        </div>
    );
}
export default CardProduct;