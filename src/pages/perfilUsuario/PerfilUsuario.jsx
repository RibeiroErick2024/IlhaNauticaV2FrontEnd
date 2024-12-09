import { useContext, useEffect, useState } from "react";

import "./PerfilUsuario.css";
import CompletarCadastro, { FormUsuario } from "../../components/FormCompletarCadastro";
import { useContextGlobal } from "../../contexts/GlobalContext";
import HeaderPrincipal from "../../components/Header";
import { useNavigate } from "react-router-dom";
import api, { axiosapi } from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";

function PerfilUsuario() {
  const navigate = useNavigate();
  const { editando, setEditando, locador } = useContextGlobal();
  const { idUsuario, logout } = useAuth();
  const [imagemBase64, setImagemBase64] = useState(null);
  const [embarcacoes, setEmbarcacoes] = useState([]);
  const fetchBarcos = async () => {
    try {
      const response = await axiosapi.get(`/embarcacao/usuario/{idUsuario}${idUsuario}`, { responseType: "json" });
      setEmbarcacoes(response.data)
    } catch (error) {
      console.log("Erro ao tentar buscar imagens da embarcacao", error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setEditando(true);
  }, []);

  function paraLocador() {
    setEditando(true);
    navigate("/cadastroLocador");
  }

  async function deleteUsuario() {
    try {
      const response = axiosapi.delete(`usuario/${idUsuario}`);
      alert("Tchau");
      logout();
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <>
      <HeaderPrincipal />
      {/* <div className="imgFundo"> */}
      <div className="containerPerfil">
        {/* Contêiner de Ícones */}
        <div className="icones-usuario">
          <button type="button" className="btn-icone">
            <img className="icon" src="./images/perfil.png" alt="Ícone Marinheiro" />
          </button>
          {locador && (
            <button type="button" className="btn-icone" onClick={paraLocador}>
              <img className="icon" src="./images/embarcacao.png" alt="Ícone Marinheiro" />
            </button>
          )}
          <button type="button" className="btn-icone">
            <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" />
          </button>
          <button type="button" className="texto-excluir" onClick={deleteUsuario}>
            Excluir conta
            {/* <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" /> */}
          </button>
        </div>

        {/* Contêiner de Inputs */}

        {/* <button type="submit" className="btn-salvar-marinheiro">Salvar</button> */}
        <div className="perfilMarinheiro">
          <h1 className="titulo-embarcacao">Perfil Usuario</h1>
          <FormUsuario />
          {embarcacoes.map((embarcacao) => (
            <div key={embarcacao.idEmbarcacao} style={{ marginBottom: "20px" }}>
              <p>
                <strong>ID:</strong> {embarcacao.idEmbarcacao}
              </p>
              <p>
                <strong>Nome:</strong> {embarcacao.nome}
              </p>
             
              <p>
                <strong>Categoria:</strong> {embarcacao.categoria}
              </p>
              <button onClick={() => handleEdit(embarcacao.idEmbarcacao)}>Editar</button>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default PerfilUsuario;
