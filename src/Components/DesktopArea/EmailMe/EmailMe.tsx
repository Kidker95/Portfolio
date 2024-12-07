import "./EmailMe.css";
import emailMeIcon from "../../../Assets/Images/win98Icons/emailMe.png"

export function EmailMe(): JSX.Element {
 const handleDoubleClick = () => { window.location.href = "mailto:irmoomri@gmail.com";};
    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={emailMeIcon} alt="emailMe" />
            <p>Email Me</p>
        </div>
    );
}
