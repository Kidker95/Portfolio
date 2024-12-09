import "./Video.css";
import videoIcon from "../../../Assets/Images/win98Icons/video.jpeg";
import { VideoModel } from "../../../Models/VideoModel";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../Redux/PopupSlice";

interface VideoProps {
    video: VideoModel;
}

export function Video({ video }: VideoProps): JSX.Element {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        console.log("Video source:", video.source); // Debugging
        dispatch(
            openPopup({
                title: video.name,
                contentKey: "video",
                src: video.source,
            })
        );
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={videoIcon} alt="video icon" />
            <p>{video.name}</p>
        </div>
    );
}
