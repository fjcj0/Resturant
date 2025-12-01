import { useState } from "react";
import { categories, sampleProducts } from "../../constants/data";
import CardProduct from "../../ui/cards/CardProduct";
const UserStorePage = () => {
    const [id, setId] = useState(1);
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">المتجر</h1>
            <div className="flex w-full overflow-x-auto scrollbar-hide items-start justify-start gap-3 py-2">
                {
                    categories.map((cat, index) => (
                        <button
                            key={cat.id}
                            type="button"
                            className={`min-w-[9rem] gap-1 text-xs h-[2rem] ${cat.id === id ? 'bg-primary text-white' : 'bg-primary/20'
                                } rounded-full flex-center flex-shrink-0`}
                        >
                            <p>{cat.name}</p>
                            <p>{cat.icon}</p>
                        </button>
                    ))
                }
            </div>
            <div className="my-14 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-x-3 gap-y-12 w-full">
                {sampleProducts.map((product, index) => (
                    <CardProduct
                        key={index}
                        title={product.title}
                        picture={product.picture}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default UserStorePage;