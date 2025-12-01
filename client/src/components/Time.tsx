import { useState, useEffect } from 'react';
import { CiTimer } from "react-icons/ci";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ar-PS', {
            timeZone: 'Asia/Gaza',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('ar-PS', {
            timeZone: 'Asia/Gaza',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="flex-center flex-col bg-primary p-5 text-sm gap-3 text-white rounded-xl" dir="rtl">
            <CiTimer className='w-24 h-24' />
            <div>
                <h1 className='font-bold text-lg'>توقيت اليوم</h1>
            </div>
            <div className="flex-center gap-1 text-xs">
                <h2>توقيت رام الله، فلسطين</h2>
                <div className="font-mono text-left">
                    {formatTime(currentTime)}
                </div>
            </div>
            <div className="flex-center flex-row-reverse text-center text-xs">
                {formatDate(currentTime)}
            </div>
        </div>
    );
};

export default Time;