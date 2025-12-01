import { useState } from "react";
import Button from "../buttons/Button";
import MenuEditModal from "../modals/MenuEditModal";

const CardMenuAgent = ({
    id,
    name,
    price,
    category,
    description,
    image,
    created_at
}: {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    created_at: string;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex-center flex-col gap-4 p-3 border-[0.7px] border-gray-500 rounded-lg text-center h-[23rem] max-lg:h-[21rem]">
                <div>
                    <img
                        src={image}
                        alt={name}
                        className="w-32 h-32 max-lg:w-12 max-lg:h-12 rounded-full object-cover"
                    />
                </div>
                <div className="flex-center flex-col gap-4">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-xs">{description}</p>
                    <div className="flex-between w-full text-xs">
                        <span className=" py-1 px-2 rounded-full bg-blue-600/20 text-blue-600">
                            {category}
                        </span>
                        <span className="px-4 py-2 rounded-full bg-yellow-600/20 text-yellow-600">
                            ${price}
                        </span>
                    </div>
                </div>
                <Button
                    onPress={() => setIsModalOpen(true)}
                    isLoading={false}
                    title="تعديل"
                />
            </div>
            {isModalOpen && (
                <MenuEditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    itemData={{
                        id,
                        name,
                        price,
                        category,
                        description,
                        image,
                        created_at
                    }}
                    onSave={(updatedData: any) => {
                        console.log("Updated Data:", updatedData);
                    }}
                />
            )}
        </>
    );
}

export default CardMenuAgent;