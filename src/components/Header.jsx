import React from "react";
import "../styles/Header.scss";

function Header() {
	return (
		<>
			<nav>
				<div className="navbar-right">
					<div className="logo">
						aqui va un logo
					</div>
				</div>
				<div className="navbar-right">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/signin">Sign in</a>
						</li>
						<li>
							<a href="/">Feedback</a>
						</li>
					</ul>
				</div>

			</nav>
		</>
	)
}

export { Header };