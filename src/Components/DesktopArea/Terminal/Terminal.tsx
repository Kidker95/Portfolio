import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";  // Assuming you have an action to open popups
import "./Terminal.css";
import terminalIcon from "../../../Assets/Images/win98Icons/terminal.jpeg";  // Terminal icon

export function Terminal(): JSX.Element {
    const dispatch = useDispatch();

    // Trigger the special popup when the terminal icon is clicked
    const handleClick = () => {
        dispatch(openPopup({ title: "Terminal", contentKey: "terminal" })); // Open the terminal popup
    };

    return (
        <div className="desktop-icon" onClick={handleClick}>
            <img src={terminalIcon} alt="Terminal" />
            <p>Terminal</p>
        </div>
    );
}
