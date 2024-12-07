import "./Link.css";
import linkIcon from "../../../Assets/Images/win98Icons/link.jpeg";

interface LinkProps {
    links: { url: string; siteName: string }[]; 
}

export function Link({ links }: LinkProps): JSX.Element {
    return (
        <>
            {links.map((link, index) => (
                <div className="desktop-icon" key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <img src={linkIcon} alt={`${link.siteName} icon`} />
                        <p>{link.siteName}</p>
                    </a>
                </div>
            ))}
        </>
    );
}
