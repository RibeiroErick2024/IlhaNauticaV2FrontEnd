import { useState } from "react";
import "./index.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom"; 


const FormLogin = ({ onToggleForm }) => {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { usuario, senha });
  };

  //Controla visibilidade da senha
  const toggleSenhaVisibilidade = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleRegistrarClick = (event) => {
    event.preventDefault();
    onToggleForm();
  }
  const handleRecuperacaoClick = (event) => {
    event.preventDefault(); 
    navigate("/recuperacaoSenha"); // Navega para a página de recuperação de senha
  };

  const handleHomeClick = (event) => {
    event.preventDefault(); 
    navigate("/home"); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>


        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <Mail size={22} className="icon" />
        </div>


        <div className="input-field" style={{ position: "relative" }}>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />


          <div className="iconeSenha" onClick={toggleSenhaVisibilidade}>

            {mostrarSenha ? (
              <EyeOff size={22} />) : (<Eye size={22} />)
            }
          </div>
        </div>



        <div className="recall-forget">
          
          <a href="#" onClick={handleRecuperacaoClick}>
            Esqueceu sua senha?
          </a>
        </div>


        <button  onClick={handleHomeClick} type="submit">Login</button>
        <div className="signup-link">
          <p>Não tem uma conta?{" "}<a href="#" onClick={handleRegistrarClick}>Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
