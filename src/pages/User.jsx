import React from "react";
import { Header } from "../components/Header";

function User({ username }) {
  username = "Drizzy Sanki0";

  const logout = (e) => {
    console.log("gaaa")
  }

  return (
    <>
      <Header></Header>
      <div className="User">
        <div>Usuario: {username}</div>
        <button
          onClick={logout}
          className="User-logout">log out</button>
        <div>
          <button>visualizar proyectos</button>
          <button>crear nuevo proyecto</button>
        </div>
      </div>
    </>
  );
}

User.defaultProps = {
  username: "Sanki0",
}

export { User };