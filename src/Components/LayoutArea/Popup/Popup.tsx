import { useDispatch } from "react-redux";
import { closePopup } from "../../../Redux/PopupSlice";
import { Link } from "../../DesktopArea/Link/Link";
import aboutMePhoto from "../../../Assets/Images/AboutMe.jpg";
import warningIcon from "../../../Assets/Images/win98Icons/warning.jpeg";
import "./Popup.css";

interface PopupProps {
    title: string;
    contentKey: string;
    isErrorPopUp?: boolean;
}

export function Popup({ title, contentKey}: PopupProps): JSX.Element {
    const dispatch = useDispatch();

    const PortfolioLinks = [
        { url: "https://kidker95.github.io/tic-tac-toe/", siteName: "React - Tic Tac Toe" },
        { url: "https://kidker95.github.io/The-ToolBox/", siteName: "Native HTML - The Toolbox" },
        { url: "https://kidker95.github.io/Crypto-Info/", siteName: "Crypto Info" },
        { url: "https://www.npmjs.com/package/get-random-color-by-kidker", siteName: "NPM - Get Random Color" },
        { url: "https://www.npmjs.com/package/color-converter-by-kidker", siteName: "NPM - Color Converter" },
        { url: "https://github.com/Kidker95/404-prank-chrome-extentions", siteName: "Github - 404 Prank Chrome Extension" },
    ];

    const renderContent = () => {
        switch (contentKey) {
            case "projects":
                return (
                    <div className="projects-popup">
                        <div className="projects-list">
                            <Link links={PortfolioLinks} />
                        </div>
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
                        <li>&#x2713;Databases: MongoDB, SQL</li>
                        <li>&#x2713;Frontend: React, Angular</li>
                        <li>&#x2713;Backend: Node.js</li>
                        <li>&#x2713;Languages: JavaScript, TypeScript, HTML, CSS, Regex</li>
                        <li>&#x2713;Version Control: Git, GitHub</li>
                        <li>&#x2713;Frameworks: Express.js</li>
                        <li>&#x2713;Testing: Mocha, Cypress</li>
                        <li>&#x2713;Performance Optimization: Lazy Loading</li>
                        <li>&#x2713;Cloud & Hosting: Firebase, AWS, Azure</li>
                        <li>&#x2713;State Management: Redux, Context API</li>
                        <li>&#x2713;UI/UX: Tailwind CSS, Material UI</li>
                        <li>&#x2713;Security: JWT, CORS</li>
                        <li>&#x2713;DevOps & Tools: Docker</li>
                        <li>&#x2713;API & Web Services: Postman, RESTful APIs</li>
                        </ul>
                        </div>
                        <p><strong>Double click on resumé below the Recycle Bin</strong></p>
                    </div>
                );

            case "terminal":
                return (
                    <div className="terminal-popup">
                        <p>C:/Omris_Portfolio/ &gt;&gt; <span className="flickering-cursor">_</span></p>
                        
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
        <div
            className={`popup ${contentKey === "terminal" ? "terminal-popup-wrapper" : ""} ${contentKey === "aboutMe" ? "about-me-wrapper" : ""} ${contentKey === "projects" ? "projects-wrapper" : ""} ${contentKey === "explorerError" ? "explorer-error-wrapper" : ""}`}
        >
            <div className="popup-header">
                <span>{title}</span>
                <button className="close-btn" onClick={handleClose}>✕</button>
            </div>
            <div className="popup-content">{renderContent()}</div>
        </div>
    );
    
}
