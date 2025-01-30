import "../styles/theme_toggle.css";

interface NavbarProps {
    isToggled?: boolean;
    handleToggle?: () => void;
    className?: string;
}
export const Toggle = ({ isToggled, handleToggle, className }: NavbarProps) => {
    return (
        <div className={"flex flex-col items-center toggle-checkbox-container " + className}>
            <input
                type="checkbox"
                className="toggle-checkbox"
                checked={isToggled}
                onChange={handleToggle}
                id="toggle"
            />
            <label htmlFor="toggle" className="toggle-label" />
        </div>
    );
};
