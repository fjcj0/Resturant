import { agentOrders, HomeCardsInfo } from "../../constants/data";
import CardAgentOrder from "../../ui/cards/CardAgentOrder";
import CardHome from "../../ui/cards/CardHome";
const AgentHomePage = () => {
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
            <div className="w-full">
                <h1 className="font-bold text-lg">اخر الطلبات</h1>
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
        </div>
    );
}
export default AgentHomePage;