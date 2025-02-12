import { motion } from "framer-motion";
import useScrollDirection from "../hooks/scrollHook";

interface NavbarProps {
    children?: React.ReactNode;
    isChecked?: boolean;
    handleToggle?: () => void;
    className?: string;
}

const Navbar = (props: NavbarProps) => {
    const { scrollDirection, lastScrollY } = useScrollDirection([10, 50]);
    return (
        <motion.div
            className={
                "fixed top-0 w-full shadow-lg bg-gray-200 dark:bg-gray-800 py-2 px-10 z-50 " +
                (props.className ?? "")
            }
            initial={{ y: 0 }}
            animate={{ y: scrollDirection === "down" || lastScrollY > 100 ? -100 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
            {props.children}
        </motion.div>
    );
};

export default Navbar;
