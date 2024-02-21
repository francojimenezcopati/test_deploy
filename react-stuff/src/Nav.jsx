import { Link } from "react-router-dom";

export function Nav() {
    return (
        <div className="flex justify-between py-3 items-center">
            <Link to="/tests">
                <h1 className="font-bold text-3xl mb-4">Tests App</h1>
            </Link>
        </div>
    );
}