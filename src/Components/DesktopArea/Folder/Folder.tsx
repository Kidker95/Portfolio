import { FolderModel } from "../../../Models/FolderModel";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";
import folderIcon from "../../../Assets/Images/win98Icons/folder.jpeg";
import "./Folder.css";

interface FolderProps {
    folder: FolderModel;
}

export function Folder({ folder }: FolderProps): JSX.Element {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        dispatch(
            openPopup({
                title: folder.title,
                contentKey: "folder", // This remains the same
                content: { // Pass links and photos separately
                    links: folder.links,
                    photos: folder.photos,
                },
            })
        );
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={folderIcon} alt={`${folder.title} folder icon`} />
            <p>{folder.title}</p>
        </div>
    );
}
