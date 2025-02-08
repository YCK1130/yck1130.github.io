import { useEffect, useState } from "react";

const useScrollDirection = (threshold: number | number[] = 10) => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);
    // const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | undefined>(undefined);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        let delay = 200;
        // Ignore movements below the threshold
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

        const newDirection = currentScrollY > lastScrollY ? "down" : "up";

        // Note: debounce is not used here, as it causes a delay in updating the scroll direction
        setScrollDirection(newDirection);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, scrollDirection]);

    return scrollDirection;
};

export default useScrollDirection;
