import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";
import IEicon from "../../../Assets/Images/win98Icons/explorer.jpeg";
import "./InternetExplorer.css";

export function InternetExplorer(): JSX.Element {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        document.body.style.cursor = "wait"; // Show hourglass cursor

        setTimeout(() => {
            dispatch(
                openPopup({
                    title: "Internet Explorer Error",  // Set the popup title
                    contentKey: "explorerError",  // Key used to fetch content inside the popup
                    isErrorPopUp: true,  // Indicates this is an error popup
                })
            );
            document.body.style.cursor = "default"; // Reset cursor
        }, 2000); // Show the popup after 2 seconds
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={IEicon} alt="Internet Explorer" />
            <p>Explorer</p>
        </div>
    );
}
