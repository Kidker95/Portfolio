import { useSelector } from "react-redux";
import foldersData from "../../../Assets/Data/Folders.json";
import { RootState } from "../../../Redux/Store";
import { AboutMe } from "../../DesktopArea/AboutMe/AboutMe";
import { DownloadResume } from "../../DesktopArea/DownloadResume/DownloadResume";
import { EmailMe } from "../../DesktopArea/EmailMe/EmailMe";
import { Folder } from "../../DesktopArea/Folder/Folder";
import { InternetExplorer } from "../../DesktopArea/InternetExplorer/InternetExplorer";
import { Link } from "../../DesktopArea/Link/Link";
import { Photo } from "../../DesktopArea/Photo/Photo";
import { RecycleBin } from "../../DesktopArea/RecycleBin/RecycleBin";
import { Terminal } from "../../DesktopArea/Terminal/Terminal";
import { Popup } from "../../LayoutArea/Popup/Popup";
import "./Home.css";
import img from "../../../Assets/Images/screenshots/toolbox.jpeg"


export function Home(): JSX.Element {

    const contactLinks = [
        { url: "https://www.linkedin.com/in/omri-shachar/", siteName: "LinkedIn" },
        { url: "https://www.npmjs.com/~kidker95", siteName: "NPM Profile" },
        { url: "https://github.com/Kidker95", siteName: "GitHub" },
    ];

    const activePopups = useSelector((state: RootState) => state.popup.activePopups);

    return (
        <div className="Home">
            <RecycleBin />
            <DownloadResume />
            <EmailMe />
            <Link links={contactLinks} />
            <InternetExplorer />
            <AboutMe />
            <Terminal />
            <Photo photo={{ source: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Photo From URL" }} />

            {/* Render Folders */}
            {foldersData.map((folder, index) => (
                <Folder key={index} folder={folder} />
            ))}

            {/* Active Popups */}
            {activePopups.map((popup, index) => (
                <Popup key={index} title={popup.title} contentKey={popup.contentKey} content={popup.content} src={popup.src} photo={popup.photo} />
            ))}

        </div>
    );
}
