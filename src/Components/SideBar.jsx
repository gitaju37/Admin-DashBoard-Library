import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar-Container">
            <ul>
                <a className="sidebar-logo" href="">
                    <div><i className="bi bi-emoji-heart-eyes"></i></div>
                    <div>Admin Dashboard</div>
                </a>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
                <li className="sidebar-item">
                    <NavLink className="nav-link" to='/home'>
                        <i className="bi bi-speedometer"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
                <li className="sidebar-item">
                    <NavLink className="nav-link" to='/addbook'>
                        <i className="bi bi-book"></i>
                        <span>Add Book</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
                <li className="sidebar-item">
                    <NavLink className="nav-link" to='/editbook'>
                        <i className="bi bi-pencil-square"></i>
                        <span>Edit Book</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
                <li className="sidebar-item" >
                    <NavLink className="nav-link" to='/books'>
                        <i className="bi bi-journal-bookmark-fill"></i>
                        <span>Books</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
                <li className="sidebar-item" >
                    <NavLink className="nav-link" to='/'>
                        <i className="bi bi-gear"></i>
                        <span>Logout</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider" style={{ color: "black", border: "2px solid red" }} />
            </ul>

        </div>
    )
}

export default SideBar
