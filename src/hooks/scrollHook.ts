import { useEffect, useState } from "react";

const useScrollDirection = (threshold: number | number[] = 10) => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | undefined>(undefined);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        let delay = 200;
        // Ignore very small scroll movements (below the threshold)
        if (Array.isArray(threshold)) {
            const [up, down] = threshold;
            if (currentScrollY < lastScrollY - up) {
                delay = 10;
            } else if (currentScrollY > lastScrollY + down) {
                delay = 200;
            } else {
                return;
            }
        } else {
            if (Math.abs(currentScrollY - lastScrollY) < threshold) return;
        }

        // Determine scroll direction
        const newDirection = currentScrollY > lastScrollY ? "down" : "up";

        // Only update direction if it has changed
        if (newDirection !== scrollDirection) {
            clearTimeout(debounceTimeout);
            const timeout = setTimeout(() => {
                setScrollDirection(newDirection);
            }, delay); // Delay for smoother behavior
            setDebounceTimeout(timeout);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(debounceTimeout);
        };
    }, [lastScrollY, scrollDirection, debounceTimeout]);

    return scrollDirection;
};

export default useScrollDirection;
