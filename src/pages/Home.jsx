import React from "react";
import { Header } from "../components/Header";
import "../styles/Home.scss"


function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="title-home">CRC cards Generator</h1>
        <div className="descripcion">
          aqui va una descripcion del proyecto
        </div>
        <div className="mision">
          <h2>Mision</h2>
          aqui va la mision
        </div>
        <div className="vision">
          <h2>Vision</h2>
          aqui va la vision
        </div>
      </div>
    </>
  )
}

export { Home };