import { LastUserOrders } from "../../constants/data";
import CardUserOrder from "../../ui/cards/CardUserOrder";

const UserOrdersPage = () => {
    return (
        <div className="w-full p-3">
            <h1 className="font-bold text-lg mb-2">جميع الطلبات</h1>
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
    );
}
export default UserOrdersPage;