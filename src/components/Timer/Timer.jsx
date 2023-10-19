
import Countdown from 'react-countdown-now';

const Timer = ({onTimeout, refCallback}) => {
    

    const renderer = ({ seconds, completed }) => {
        if (completed) {
            // Таймер завершился
            return <span>Hello</span>
            
        } else {
            // Отображаем оставшееся время в минутах и секундах
            return <span>{seconds}</span>;
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 3000} // 5 минут (в миллисекундах)
                renderer={renderer}
                onComplete={() => onTimeout()}
            />
        </div>
    );
};

export default Timer;