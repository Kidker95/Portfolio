import "./DownloadResume.css";
import resumeIcon from "../../../Assets/Images/win98Icons/resume.jpeg";

export function DownloadResume(): JSX.Element {
    return (
        <div className="desktop-icon">
            <a href={`/Portfolio/Documents/OmriShachar.pdf`} download="OmriShachar.pdf">                <img src={resumeIcon} alt="resumeIcon" />
                <p>Download Resumé</p>
            </a>
        </div>
    );
}
