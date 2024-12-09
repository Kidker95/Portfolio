import "./AboutMe.css";
import aboutMeIcon from "../../../Assets/Images/win98Icons/aboutMe.jpeg";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";

export function AboutMe(): JSX.Element {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        dispatch(
            openPopup({
                title: "About Me.exe",
                contentKey: "aboutMe",
            })
        );
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={aboutMeIcon} alt="about-me-icon" />
            <p>AboutMe.exe</p>
        </div>
    );
}
