import { menus } from "../../constants/data";
import CardMenuAgent from "../../ui/cards/CardMenuAgent";
const AgentMenusPage = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
                {
                    menus.map((m, index) => (
                        <CardMenuAgent
                            key={index}
                            name={m.name}
                            description={m.description}
                            created_at={m.createdAt}
                            image={m.image}
                            id={m.id}
                            price={m.price}
                            category={m.category}
                        />
                    ))
                }

            </div>
        </div>
    );
}
export default AgentMenusPage;