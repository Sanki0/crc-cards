import React from "react";
import { Header } from "../components/Header";


function Home() {
  return (
    <>
      <Header />
      <body>
        <div className="mision">
          aqui va la mision
        </div>
        <div className="vision">
          aqui va la vision
        </div>
      </body>
    </>
  )
}

export { Home };