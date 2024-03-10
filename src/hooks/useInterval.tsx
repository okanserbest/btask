import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: any) => {
  const savedCallback = useRef<() => void | null>(null);

  useEffect(() => {
    savedCallback.current = callback; // ts problem is here
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
