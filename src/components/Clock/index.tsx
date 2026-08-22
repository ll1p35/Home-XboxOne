import React, { useState, useEffect } from 'react';
import '../../pages/home/style.css';

const Clock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date()); //const para o tempo atual no format de data e hora.

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime
        .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        })
        .replace(/(AM|PM)/, (match) => match.toLowerCase());

    return (
        <div className="flex flex-col items-center text-white">
            <span className="text-1xl font-light font-['Noto_Sans']">
            {formattedTime}
            </span>
        </div>
    );
};

export default Clock;