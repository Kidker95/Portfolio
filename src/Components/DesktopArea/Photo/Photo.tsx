import "./Photo.css";
import photoIcon from "../../../Assets/Images/win98Icons/photo.jpeg";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";
import { PhotoModel } from "../../../Models/PhotoModel";

interface PhotoProps {
    photo: PhotoModel;
}

export function Photo({ photo }: PhotoProps): JSX.Element {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        console.log("Photo source:", photo.source); // Debug here
        dispatch(
            openPopup({
                title: photo.title,
                contentKey: "photo",
                src: photo.source,
                photo: photo,
            })
        );
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={photoIcon} alt={photo.title} />
            <p>{photo.title}</p>
        </div>
    );
}
