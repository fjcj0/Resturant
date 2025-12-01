const LoadingPage = () => {
    return (
        <div className="min-h-screen w-screen flex-center flex-col gap-5">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
            <div className="relative flex items-center gap-1 right-3.5">
                <h1 className="font-medium text-sm">يتم التحميل</h1>
                <div className="w-8 flex">
                    <span className="dot-sequence"></span>
                </div>
            </div>
            <style>{`
                .dot-sequence {
                    animation: dotSequence 1.5s infinite steps(4);
                    display: inline-block;
                    width: 24px;
                    text-align: right;
                }
                @keyframes dotSequence {
                    0% { content: ''; }
                    25% { content: '.'; }
                    50% { content: '..'; }
                    75% { content: '...'; }
                    100% { content: ''; }
                }
                /* Fallback for content property */
                .dot-sequence::before {
                    content: '...';
                    animation: dotSequenceBefore 1.5s infinite steps(4);
                }
                @keyframes dotSequenceBefore {
                    0% { content: ''; }
                    25% { content: '.'; }
                    50% { content: '..'; }
                    75% { content: '...'; }
                    100% { content: ''; }
                }
            `}</style>
        </div>
    );
}

export default LoadingPage;