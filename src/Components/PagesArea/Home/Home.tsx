import { useSelector } from "react-redux";
import { LinkModel } from "../../../Models/LinkModel";
import { RootState } from "../../../Redux/Store";
import { AboutMe } from "../../DesktopArea/AboutMe/AboutMe";
import { DownloadResume } from "../../DesktopArea/DownloadResume/DownloadResume";
import { EmailMe } from "../../DesktopArea/EmailMe/EmailMe";
import { InternetExplorer } from "../../DesktopArea/InternetExplorer/InternetExplorer";
import { Link } from "../../DesktopArea/Link/Link";
import { ProjectsFolder } from "../../DesktopArea/ProjectsFolder/ProjectsFolder";
import { RecycleBin } from "../../DesktopArea/RecycleBin/RecycleBin";
import { Terminal } from "../../DesktopArea/Terminal/Terminal";
import { Popup } from "../../LayoutArea/Popup/Popup";
import "./Home.css";

export function Home(): JSX.Element {
    const activePopups = useSelector((state: RootState) => state.popup.activePopups);

    const desktopLinks: LinkModel[] = [
        { url: "https://www.linkedin.com/in/omri-shachar/", siteName: "LinkedIn" },
        { url: "https://www.npmjs.com/~kidker95", siteName: "NPM Profile" },
        { url: "https://github.com/Kidker95", siteName: "GitHub" },
    ];

    return (
        <div className="Home">
            <RecycleBin />
            <DownloadResume />
            <EmailMe/>
            <Link links={desktopLinks} />
            <InternetExplorer />
            <AboutMe/>
            <ProjectsFolder/>
            <Terminal/>

            {activePopups.map((popup, index) => (
                <Popup key={index} title={popup.title} contentKey={popup.contentKey} isErrorPopUp={popup.isErrorPopUp}/>
            ))}
        </div>
    );
}
