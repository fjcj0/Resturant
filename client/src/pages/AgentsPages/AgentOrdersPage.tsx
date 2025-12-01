import { agentOrders } from "../../constants/data";
import CardAgentOrder from "../../ui/cards/CardAgentOrder";

const AgentOrdersPage = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col w-full pb-5 mt-2 gap-14 border-[0.7px] border-gray-500 rounded-lg">
                <div className="grid grid-cols-4 place-items-center font-bold rounded-t-lg p-3 text-center place-content-center bg-bg-color gap-3">
                    <h1>الطلبية</h1>
                    <h1>صاحب الطلب</h1>
                    <h1>التاريخ</h1>
                    <h1>الحالة</h1>
                </div>
                {
                    agentOrders.map((order, index) => (
                        <CardAgentOrder
                            key={index}
                            userName={order.userName}
                            picture={order.picture}
                            userPicture={order.userPicture}
                            status={order.status}
                            title={order.title}
                            date={order.date}
                            category={order.category}
                            price={order.price}

                        />
                    ))
                }
            </div>
        </div>
    );
}
export default AgentOrdersPage;