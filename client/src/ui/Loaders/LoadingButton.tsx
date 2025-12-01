const LoadingButton = () => {
    return (
        <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-white animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="4" d="M12 2a10 10 0 0 1 10 10"></path>
            </svg>
        </div>
    );
}

export default LoadingButton;