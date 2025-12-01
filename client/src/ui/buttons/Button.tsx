import LoadingButton from "../Loaders/LoadingButton";
const Button = ({ onPress, title, isLoading }: {
    onPress: () => Promise<void> | void;
    title: string;
    isLoading: boolean;
}) => {
    return (
        <button
            onClick={onPress}
            disabled={isLoading}
            className={`bg-primary font-bold text-white py-4 w-full rounded-xl ${!isLoading && 'hover:bg-primary-hover'}  duration-300 transition-all ${!isLoading && 'cursor-pointer'} ${isLoading && 'opacity-50 bg-primary'}`}>
            {isLoading ? <LoadingButton /> : title}
        </button>
    );
};
export default Button;