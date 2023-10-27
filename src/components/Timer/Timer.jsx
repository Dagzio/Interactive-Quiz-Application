
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { TimerWrapper, TimerSeconds } from './Timer.styled';

const Timer = ({onTimeout, points, question}) => {

    const expiryTime = 100 * 30 * 5;

    const {seconds, restart} = useTimer({
        expiryTimestamp: Date.now() + expiryTime,
         onExpire: () => onTimeout()});

         useEffect(() => {
            restart(Date.now() + expiryTime);


         }, [ points, question, expiryTime, restart]);

    return (
            <TimerWrapper>
                <TimerSeconds>{ seconds}</TimerSeconds>
            </TimerWrapper>
    );
};

export default Timer;