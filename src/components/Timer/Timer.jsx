import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { TimerWrapper, TimerSeconds } from './Timer.styled';

const Timer = ({onTimeout, points}) => {

    const expiryTime = 1000 * 60 * 100;

    const {seconds, restart} = useTimer({
        expiryTimestamp: Date.now() + expiryTime,
         onExpire: () => onTimeout()});

         useEffect(() => {
            restart(Date.now() + expiryTime);
         // eslint-disable-next-line react-hooks/exhaustive-deps
         }, [points]);

    return (
            <TimerWrapper>
                <TimerSeconds>{ seconds}</TimerSeconds>
            </TimerWrapper>
    );
};

export default Timer;