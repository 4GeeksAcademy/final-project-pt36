import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
		
	const logout = () => {
		localStorage.clear()
		navigate("/login")
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{location.pathname !== "/login" && <button onClick={logout} className="btn btn-primary">Log Out</button>}
				</div>
			</div>
		</nav>
	);
};
