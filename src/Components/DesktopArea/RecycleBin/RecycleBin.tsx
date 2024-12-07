import { useState } from "react";
import "./RecycleBin.css";
import recycleBinEmpty from "../../../Assets/Images/win98Icons/recycleBinEmpty.jpeg";
import recycleBinFull from "../../../Assets/Images/win98Icons/recycleBinFull.jpeg";
import recycleBinSound from "../../../Assets/Sounds/recycleBin.mp3"; 

export function RecycleBin(): JSX.Element {
    const [isFull, setIsFull] = useState(true);

    const handleDoubleClick = () => {
        const audio = new Audio(recycleBinSound);
        audio.play();
        setIsFull(!isFull);
    };

    return (
        <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
            <img src={isFull ? recycleBinFull : recycleBinEmpty} alt={isFull ? "Full Recycle Bin" : "Empty Recycle Bin"} />
            <p>Recycle Bin</p>
        </div>
    );
}
