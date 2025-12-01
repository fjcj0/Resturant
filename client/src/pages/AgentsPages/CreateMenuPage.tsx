import { useState } from "react";
import FloatInput from "../../ui/inputs/FloatInput";
import { categories } from "../../constants/data";
import Button from "../../ui/buttons/Button";
const CreateMenuPage = () => {
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [price, setPrice] = useState('');
    const [errorPrice, setErrorPrice] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState<File | null>(null);
    const [picturePreview, setPicturePreview] = useState<string>('');
    const [description, setDescription] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPicture(file);
            const previewUrl = URL.createObjectURL(file);
            setPicturePreview(previewUrl);
        }
    };
    const handleRemoveImage = () => {
        setPicture(null);
        setPicturePreview('');
        if (picturePreview) {
            URL.revokeObjectURL(picturePreview);
        }
    };
    return (
        <div className="w-full flex flex-col p-4">
            <h1 className="font-bold text-lg mb-6">انشاء قائمة</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FloatInput
                    value={name}
                    setValue={setName}
                    isPassword={false}
                    label="اسم المنتج"
                    error={errorName}
                    type="text"
                    headText="الاسم"
                />
                <FloatInput
                    value={price}
                    setValue={setPrice}
                    isPassword={false}
                    label="السعر"
                    error={errorPrice}
                    type="number"
                    headText="السعر"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="w-full">
                    <p className="text-sm font-medium text-gray-700 mb-2">صورة المنتج</p>
                    {picturePreview ? (
                        <div className="relative">
                            <div className="w-full  mb-2 rounded-xl overflow-hidden border border-gray-300">
                                <img
                                    src={picturePreview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="absolute top-2 left-2 bg-red-500 text-white p-1 w-8 h-8 flex-center rounded-full hover:bg-red-600">
                                ✕
                            </button>
                            <p className="text-sm text-gray-600 mt-1">
                                {picture?.name} ({(picture?.size! / 1024).toFixed(2)} KB)
                            </p>
                        </div>
                    ) : (
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full px-3 py-3 border-[0.5px] border-gray-300 rounded-xl bg-transparent outline-none focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                يمكنك رفع الصور بصيغة JPG, PNG, أو GIF
                            </p>
                        </div>
                    )}
                </div>
                <div className="w-full">
                    <p className="text-sm font-medium text-gray-700 mb-2">الفئة</p>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-3 border-[0.5px] border-gray-300 rounded-xl bg-transparent outline-none focus:border-blue-500"
                    >
                        <option value="">اختر فئة</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full mb-4">
                <FloatInput
                    value={description}
                    setValue={setDescription}
                    isPassword={false}
                    label="وصف المنتج"
                    error={errorDescription}
                    type="text"
                    headText="الوصف"
                />
            </div>

            <Button
                title="انشاء المنتج"
                isLoading={false}
                onPress={() => {
                    // Handle form submission
                    console.log({
                        name,
                        price,
                        category,
                        picture,
                        description
                    });
                }}
            />
        </div>
    );
};
export default CreateMenuPage;