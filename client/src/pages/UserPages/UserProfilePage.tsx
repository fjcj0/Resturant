import { useRef, useState } from "react";
import { Edit } from 'lucide-react';
import Input from "../../ui/inputs/Input";
const UserProfilePage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<string>('https://res.cloudinary.com/djovbiyia/image/upload/v1763824016/uploads/x4qcp0afygu18v3zq2o5.jpg');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePicture(imageUrl);
            console.log('File selected:', file);
        }
    };
    return (
        <div className="p-5">
            <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                <div className="md:col-span-2">
                    <button
                        type="button"
                        onClick={handleImageClick}
                        className="relative flex items-center justify-center rounded-xl duration-300 transition-all w-full hover:opacity-80"
                    >
                        <img
                            src={profilePicture}
                            alt="Admin Profile"
                            className="w-full h-auto rounded-xl"
                        />
                        <div className="absolute top-1 right-1">
                            <Edit size={20} color='white' />
                        </div>
                    </button>
                </div>
                <div className="md:col-span-5 rounded-xl">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col p-3 rounded-3xl gap-3 bg-blue-1">
                            <Input
                                placeholder="الاسم"
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                placeholder="Email Address"
                                value={email}
                                type="email"
                                isDisabled={true}
                                onChange={() => console.log('')}
                            />
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className={`px-8 font-nunito font-bold py-2 rounded-2xl text-black bg-purple-1 border-[0.5px] border-gray-300 hover:bg-purple-2 hover:text-white hover:bg-primary duration-300 transition-all`}
                                >
                                    تعديل
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserProfilePage;