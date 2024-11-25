import { useContext, useEffect, useState } from "react";

import "./index.css";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";

function PerfilMarinheiro() {
  const {editando, setEditando} = useContextGlobal();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setEditando(true); 
  }, [setEditando]);
  useEffect(() =>{
 
  })
  return (
    <div >
      {/* Contêiner de Ícones */}
      <div className="icones-marinheiro">
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/perfil.png" alt="Ícone Marinheiro" />
        </button>
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/capitao.png" alt="Ícone Marinheiro" />
        </button>
      </div>

      {/* Contêiner de Inputs */}
      <FormPerfilMarinheiro />

      <button type="submit" className="btn-salvar-marinheiro">Salvar</button>
    </div>
  );
}

export default PerfilMarinheiro;
