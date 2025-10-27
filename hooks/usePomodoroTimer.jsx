import { useState, useRef, useEffect, useCallback } from "react";




export function usePomodoroTimer(initialTimerType, pomodoroTypes) {
  const [timerType, setTimerType] = useState(initialTimerType);
  const [seconds, setSeconds] = useState(initialTimerType.initialValue);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);


  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    }
  }, []);


  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, [stopTimer]);


  const changeTimerType = useCallback((newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    stopTimer();
  }, [stopTimer]);


  const toggleTimer = () => {
    if (timerRef.current) {

      stopTimer();
      return;
    }


    setIsRunning(true);

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState <= 1) {
          stopTimer();

          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
  };


  return {
    timerType,
    seconds,
    isRunning,
    changeTimerType,
    toggleTimer,
    pomodoroTypes,
  };
}