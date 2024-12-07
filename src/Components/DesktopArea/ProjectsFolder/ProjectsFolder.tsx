import { useDispatch } from "react-redux";
import folderIcon from "../../../Assets/Images/win98Icons/folder.jpeg";
import { openPopup } from "../../../Redux/PopupSlice";
import "./ProjectsFolder.css"

export function ProjectsFolder(): JSX.Element {
    const dispatch = useDispatch();

    const openProjectsPopup = () => {
        dispatch(
            openPopup({
                title: "Projects",  // Title of the popup
                contentKey: "projects",  // Content type for the popup
            })
        );
    };

    return (
        <div className="desktop-icon" onDoubleClick={openProjectsPopup}>
            <img src={folderIcon} alt="folder icon" />
            <p>Projects</p>
        </div>
    );
}
