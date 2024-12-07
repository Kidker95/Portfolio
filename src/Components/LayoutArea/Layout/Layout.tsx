import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import "./Layout.css";
import { useEffect, useState } from "react";
import { openPopup } from "../../../Redux/PopupSlice";

export function Layout(): JSX.Element {

    const dispatch = useDispatch();
    const [showAboutMePopup, setShowAboutMePopup] = useState<boolean>(false);

    useEffect(() => {
        setShowAboutMePopup(true);
        if (showAboutMePopup) dispatch(openPopup(
            { title: "About Me", contentKey: "aboutMe" }
        ))
    }, [dispatch, showAboutMePopup]);

    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <aside>
                <Menu />
            </aside>
        </div>
    );
}
