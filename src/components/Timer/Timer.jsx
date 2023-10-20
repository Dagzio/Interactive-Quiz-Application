import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({onTimeout, points}) => {

    const expiryTime = 100 * 30 * 5;

    const {seconds, restart} = useTimer({
        expiryTimestamp: Date.now() + expiryTime,
         onExpire: () => onExpireTime()});

         useEffect(() => {
            restart(Date.now() + expiryTime);
         // eslint-disable-next-line react-hooks/exhaustive-deps
         }, [points])

         const onExpireTime = async () => {
            await onTimeout();
            restart(Date.now() + expiryTime)
         }

    return (
            <div>
                <span>{ seconds}</span>
            </div>
    );
};

export default Timer;