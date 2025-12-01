import { useState, useEffect } from "react";
import { categories } from "../../constants/data";
import Button from "../buttons/Button";
import FloatInput from "../inputs/FloatInput";
interface MenuItemData {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    created_at: string;
}
interface MenuEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemData: MenuItemData;
    onSave: (updatedData: MenuItemData) => void;
}
const MenuEditModal = ({ isOpen, onClose, itemData, onSave }: MenuEditModalProps) => {
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [price, setPrice] = useState('');
    const [errorPrice, setErrorPrice] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState<File | null>(null);
    const [picturePreview, setPicturePreview] = useState<string>('');
    const [description, setDescription] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    useEffect(() => {
        if (itemData) {
            setName(itemData.name);
            setPrice(itemData.price.toString());
            setCategory(itemData.category);
            setPicturePreview(itemData.image);
            setDescription(itemData.description);
        }
    }, [itemData]);
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
    const handleSave = () => {
        let isValid = true;
        if (!name.trim()) {
            setErrorName('الاسم مطلوب');
            isValid = false;
        } else {
            setErrorName('');
        }
        if (!price || parseFloat(price) <= 0) {
            setErrorPrice('السعر يجب أن يكون أكبر من صفر');
            isValid = false;
        } else {
            setErrorPrice('');
        }
        if (!description.trim()) {
            setErrorDescription('الوصف مطلوب');
            isValid = false;
        } else {
            setErrorDescription('');
        }
        if (isValid) {
            const updatedData: MenuItemData = {
                ...itemData,
                name,
                price: parseFloat(price),
                category,
                description,
                image: picturePreview || itemData.image
            };
            onSave(updatedData);
            onClose();
        }
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-white/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h1 className="font-bold text-xl">تعديل المنتج</h1>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 text-2xl"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-6">
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
                                        <div className="w-full h-48 mb-2 rounded-xl overflow-hidden border border-gray-300">
                                            <img
                                                src={picturePreview}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={handleRemoveImage}
                                                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                                            >
                                                حذف الصورة
                                            </button>
                                            <label className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm cursor-pointer">
                                                تغيير الصورة
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
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
                        <div className="w-full mb-6">
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
                        <div className="flex gap-3 justify-end border-t pt-6">
                            <Button
                                title="إلغاء"
                                isLoading={false}
                                onPress={onClose}
                            />
                            <Button
                                title="حفظ التغييرات"
                                isLoading={false}
                                onPress={handleSave}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MenuEditModal;