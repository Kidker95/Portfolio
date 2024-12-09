import { useDispatch } from "react-redux";
import aboutMePhoto from "../../../Assets/Images/AboutMe.jpg";
import warningIcon from "../../../Assets/Images/win98Icons/warning.jpeg";
import { LinkModel } from "../../../Models/LinkModel";
import { closePopup } from "../../../Redux/PopupSlice";
import { Link } from "../../DesktopArea/Link/Link";
import "./Popup.css";
import { PhotoModel } from "../../../Models/PhotoModel";
import { Photo } from "../../DesktopArea/Photo/Photo";
import { Video } from "../../DesktopArea/Video/Video";
import { VideoModel } from "../../../Models/VideoModel";

interface PopupProps {
    photo?: PhotoModel;
    title: string;
    contentKey: string;
    src?: string;
    content?: {
        links?: LinkModel[];
        photos?: PhotoModel[];
        videos?: VideoModel[];
    };
}

export function Popup({ title, contentKey, content, photo, src }: PopupProps): JSX.Element {
    const dispatch = useDispatch();

    const renderContent = () => {
        switch (contentKey) {
            case "video":
                if (!photo && !src) return <p>Video not found</p>;
                return (
                    <div className="media-popup-content">
                        <video
                            className="popup-media video-player" src={src} controls preload="metadata">Your browser does not support the video tag.</video>
                    </div>
                );
                case "folder":
                    console.log("Videos array:", content?.videos);
                    return (
                        <div className="folder-popup-content">
                            {/* Render Links */}
                            {content?.links && (
                                <div className="links-section">
                                    <Link links={content.links} />
                                </div>
                            )}
                
                            {/* Render Photos */}
                            {content?.photos && (
                                <div className="photos-section">
                                    {content.photos.map((photo, index) => (
                                        <Photo key={index} photo={photo} />
                                    ))}
                                </div>
                            )}
                
                            {/* Render Videos */}
                            {content?.videos && (
                                <div className="videos-section">
                                    {content.videos.map((video, index) => (
                                        <Video key={index} video={video} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                
            case "photo":
                console.log("Rendering photo with source:", photo?.source); // Debugging
                if (!photo) return <p>Photo not found</p>;

                return (
                    <div className="media-popup-content">
                        <img src={photo.source} alt={photo.title} className="popup-media" />
                    </div>
                );



            case "explorerError":
                return (
                    <div className="explorer-error-popup">
                        <img src={warningIcon} alt="Warning Icon" />
                        <p>Internet Explorer crashed. Try again later.</p>
                    </div>
                );
            case "aboutMe":
                return (
                    <div className="about-me-popup">
                        <img src={aboutMePhoto} alt="Omri Shachar" className="about-me-image" />
                        <p>Hi, I’m Omri! I’m a full-stack developer passionate about building clean and functional applications.</p>
                        <div className="scrollable-skills">
                            <h3>Skills:</h3>
                            <ul>
                                <li>&#x2713; Databases: MongoDB, SQL</li>
                                <li>&#x2713; Frontend: React, Angular</li>
                                <li>&#x2713; Backend: Node.js</li>
                                <li> &#x2713; Languages: JavaScript, TypeScript,HTML, CSS, Regex</li>
                                <li>&#x2713; Version Control: Git, GitHub</li>
                                <li>&#x2713; Frameworks: Express.js</li>
                                <li>&#x2713; Testing: Mocha, Cypress</li>
                                <li>&#x2713; Performance Optimization: Lazy Loading</li>
                                <li>&#x2713; Cloud & Hosting: Firebase, AWS</li>
                                <li>&#x2713; State Management: Redux, Context API</li>
                                <li>&#x2713; UI/UX: Tailwind CSS, Material UI</li>
                                <li>&#x2713; Security: JWT, CORS</li>
                                <li>&#x2713; DevOps & Tools: Docker</li>
                                <li>&#x2713; API & Web Services: Postman, RESTful APIs</li>
                            </ul>
                        </div>
                        <p><strong>Double click on resumé below the Recycle Bin</strong></p>
                    </div>
                );
            case "terminal":
                return (
                    <div className="terminal-popup">
                        <p>C:/Omris_Portfolio/ &gt;&gt;{" "}<span className="flickering-cursor">_</span></p>
                    </div>
                );
            default:
                return <p>No content available</p>;
        }
    };

    const handleClose = () => {
        dispatch(closePopup(title));
    };

    return (
        <div className={`popup ${contentKey}-wrapper`}>
            <div className="popup-header">
                <span>{title}</span>
                <button className="close-btn" onClick={handleClose}>✕</button>
            </div>
            <div className="popup-content">{renderContent()}</div>
        </div>
    );
}
