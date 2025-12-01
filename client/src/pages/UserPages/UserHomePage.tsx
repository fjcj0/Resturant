import { HomeCardsInfo, LastUserOrders } from "../../constants/data";
import CardHome from "../../ui/cards/CardHome";
import CardUserOrder from "../../ui/cards/CardUserOrder";
const UserHomePage = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {HomeCardsInfo.map((card, index) => (
                    <CardHome
                        key={index}
                        title={card.title}
                        textIconColor={card.textIconColor}
                        bgIconColor={card.bgIconColor}
                        value={card.value}
                        Icon={card.icon}
                    />
                ))}
            </div>
            <div className="w-full p-3">
                <h1 className="font-bold text-lg mb-2">اخر الطلبات</h1>
                <div className="rounded-lg flex flex-col w-full gap-3">
                    {
                        LastUserOrders.map((order, index) => (
                            <CardUserOrder
                                key={index}
                                title={order.title}
                                price={order.price}
                                date={order.date}
                                picture={order.picture}
                                status={order.status}
                                category={order.category}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default UserHomePage;