import { useEffect, useState } from "react";

import "./CadastroLocador.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import { useNavigate } from "react-router-dom";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";
import { useForm } from "react-hook-form";
import HeaderPrincipal from "../../components/Header";


function CadastroLocador() {
  const navigate = useNavigate();
  const { iconeCategoria, setIconeCategoria, setEditando } = useContextGlobal();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //teste
  const handleClick = () => {
    console.log(iconeCategoria)
  };

  useEffect(() => { setEditando(false) }, [])



  return (
    <>
      <HeaderPrincipal />
      <div className="container-cadastro">
        <div className="titulo-cadastro">
          <h2 >Seu Barco </h2>
          <hr className="linhaHr" />
        </div>
        <div className="icones-embarcacao">
          <button type="button" className="btn-icone" onClick={() => setIconeCategoria("Jet Ski")}>
            <img
              className="icon-svg"
              src="./images/Drag Boat.png"
              alt="Icone Jet-ski"

            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Iate")}>
            <img
              className="icon-svg"
              src="./images/Yacht.png"
              alt="Icone Iate"

            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Lancha")}>
            <img
              className="icon-svg"
              src="./images/Boat Launch.png"
              alt="Icone Lancha"


            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Veleiro")}>
            <img
              className="icon-svg"
              src="./images/Sailboat.png"
              alt="Icone Veleiro"

            />
          </button>
        </div>

        <div className="forms-cadastro">
          <FormPerfilMarinheiro />,
          <br></br>
          <br></br>
          <br></br>
          <hr className="linhaHr" />
          <CadastroEmbarcacoes />,

        </div>
      </div>
    </>
  );
}

export default CadastroLocador;
