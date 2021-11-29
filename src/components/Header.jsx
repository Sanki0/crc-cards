import React from "react";
import "../styles/Header.scss";

function Header() {
	return (
		<>
			<nav className="Header">
				<div className="Header-navbar-right">
					<div className="logo">
						aqui va un logo
					</div>
				</div>
				<div className="Header-navbar-right">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/signin">Sign In</a>
						</li>
						<li>
							<a href="/signup">Sign Up</a>
						</li>
						<li>
							<a href="/feedback">Feedback</a>
						</li>
					</ul>
				</div>

			</nav>
		</>
	)
}

export { Header };