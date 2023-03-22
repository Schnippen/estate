import { useCallback, useState } from "react";

export function useThrottledFunc(func: any, delay: number) {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledFunc = useCallback(
    (...args: any) => {
      if (!isThrottled) {
        func(...args);
        setIsThrottled(true);
        setTimeout(() => setIsThrottled(false), delay);
      }
    },
    [func, delay, isThrottled]
  );

  return throttledFunc;
}
