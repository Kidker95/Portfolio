import { Clock } from "../Clock/Clock";
import "./Menu.css";

export function Menu(): JSX.Element {

    const year = new Date().getFullYear()

    return (
        <div className="Menu">

          <p>Omri Shachar &copy; | {year}</p>
            <Clock/>
        </div>
    );
}
