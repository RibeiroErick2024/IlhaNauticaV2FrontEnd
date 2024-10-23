import { useState } from "react";


import "./PerfilEmbarcacao.css"

const PerfilEmbarcacao = () => {

  const [usernome, setUserNome] = useState("");
  const [usermodelo, setUserModelo] = useState("");
  const [userano, setUserAno] = useState("");
  const [usercapacidade, setUserCapacidade] = useState("");
  const [useranimaispermitidos, setUserAnimaisPermitidos] = useState("");
  const [userlocalizacao, setUserLocallizacao] = useState("");
  const [userroteiros, setUserRoteiros] = useState("");
  const handleSubmit = (event) => {

    event.preventDefault();



  };

  return (
    <div className="teste">

      <div>
        <h1>ILHA NAUTICA</h1>

        <li>
          <lu>Registre seu Barco</lu>
          <lu>Ajuda</lu>
          <lu>Entrar</lu>
          <lu>Registrar</lu>

        </li>
      </div>

      <div>
        <h1>Seu Barco</h1>
        <hr />
      </div>

      <div className="icones">

        <svg width="51" height="24" viewBox="0 0 51 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.7715 4.56589C48.6717 4.45 48.5343 4.38562 48.3988 4.38941C46.8451 4.4197 45.2889 4.44924 43.7314 4.47878C42.8251 4.4962 41.9188 4.51362 41.0125 4.53029L42.8086 0.624176C42.8683 0.493897 42.8658 0.33332 42.8016 0.205313C42.7373 0.0773055 42.6197 -0.00222489 42.4944 4.743e-05L40.8663 0.0204974C40.7556 0.0212549 40.6507 0.0848813 40.5852 0.190165L37.8435 4.59088C36.3444 4.61967 34.8454 4.64769 33.3509 4.67723C30.0457 4.74086 26.6285 4.806 23.3424 5.75279C22.3605 6.03532 21.5878 6.30497 20.8704 6.62006L20.8678 6.61249C20.0067 6.98742 19.1303 7.43961 18.1776 7.99102L18.1744 7.99254C18.1 8.03571 18.025 8.07889 17.9499 8.12358C16.4541 9.00372 14.763 10.127 12.6503 11.5783L12.6567 11.5911H10.362C8.85223 11.5911 7.3723 12.2107 6.19446 13.3348L3.98888 15.4397H40.3378V8.92722C40.4669 8.56819 40.6469 8.34626 40.9941 8.10464C41.244 7.93043 41.5353 7.78879 41.859 7.68199C42.8098 7.3722 43.8204 7.21541 44.7979 7.06392L48.4796 6.49433C48.7359 6.45039 48.9292 6.18529 48.9292 5.87777V5.0105C48.9292 4.84462 48.872 4.68253 48.7715 4.56589ZM24.5546 11.5911H15.1993C17.8902 9.79146 19.5265 8.83405 21.058 8.14403L24.5546 8.16751V11.5911ZM28.5053 11.401H25.8266V8.36369C26.7214 8.36899 27.6181 8.37505 28.5053 8.38035V11.401ZM35.4331 11.5911H29.7773V8.19856C30.6391 8.20462 31.4849 8.20992 32.304 8.21523C33.6733 8.22432 34.9847 8.57728 35.4331 9.03856V11.5911ZM50.4893 18.3293C50.3538 17.3575 49.6549 16.6516 48.8268 16.6516H0V17.7877H0.686224L2.66285 21.4545C2.87909 21.5075 3.09659 21.5598 3.31537 21.6113C3.53542 21.6636 3.75738 21.7143 3.97997 21.7635C15.6954 24.382 30.6524 24.1805 44.0067 23.7223C44.0646 22.7505 44.747 21.9809 45.577 21.9809H50.8461C50.8982 21.9809 50.9491 21.9847 51 21.9908L50.4893 18.3293ZM11.2035 19.8851H7.89444V18.7489H11.2035V19.8851ZM16.6945 19.8851H13.3849V18.7489H16.6945V19.8851ZM48.2704 19.8851H46.0762V18.7489H48.2704V19.8851Z" fill="#9A9A9A" />
        </svg>
        <button>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_158_300)">
              <path d="M41.4698 50.8405C29.5371 52.171 17.5112 52.9273 5.45957 53.1048L5.57597 50.202C13.4781 50.3435 21.1277 48.013 26.8379 43.7245C31.8481 39.87 35.0147 34.7802 35.8034 29.3098C37.2731 19.2577 26.2248 7.47277 19.4687 2.09787C14.9118 -1.51804 9.95323 -6.19626 8.05073 -8.07838C8.05155 -8.29766 7.95892 -8.51116 7.78678 -8.6835C7.60562 -8.86485 7.3384 -8.97867 7.04658 -8.99924C6.79493 -9.00889 6.55228 -8.92593 6.3908 -8.77481C6.05061 -8.38384 5.89322 -7.91183 5.9465 -7.43983L3.34626 53.1541C-5.71421 53.3033 -16.1066 53.2538 -27.5352 52.7895H-28L-27.7672 53.1625C-27.5877 53.4281 -23.4432 59.7976 -21.2438 60.2534C-19.9855 60.5274 -8.69458 61 3.07358 61C13.5193 61 24.302 60.627 28.6794 59.4078C34.1364 57.9732 38.7613 55.0588 41.7254 51.1889L42 50.7658L41.4698 50.8405ZM25.5474 31.2835C23.0842 39.2123 12.8605 45.7811 11.6342 46.5194C12.4588 45.8725 17.5337 41.7255 21.4136 33.2494C23.9154 27.6496 23.9154 21.5484 21.4136 15.9487C21.7735 16.33 28.1173 23.0807 25.5474 31.2835ZM20.2611 27.3023C19.6021 33.0627 16.838 38.5519 12.3006 43.1104C10.3456 45.145 8.11184 47.0054 5.6396 48.6587L8.00776 -6.68552C10.3556 -2.92885 21.3177 15.3672 20.2611 27.3023Z" fill="#9A9A9A" />

            </g>


          </svg>
        </button>



        <svg width="66" height="28" viewBox="0 0 66 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.4933 15.0414C65.4223 14.8343 65.2884 14.6547 65.1103 14.5274C64.9322 14.4002 64.7189 14.3317 64.5 14.3316H61.525L59.6868 8.26957C59.6213 8.05402 59.4882 7.86524 59.3072 7.73112C59.1262 7.597 58.9069 7.52466 58.6816 7.52477H48.456C47.9989 7.52477 47.5943 7.82087 47.455 8.25627L46.9587 9.81937H36.059L35.5627 8.25627C35.4951 8.04388 35.3616 7.85852 35.1817 7.72701C35.0017 7.5955 34.7846 7.52467 34.5617 7.52477H24.6385L21.9435 4.35237L24.4495 2.50227L28.5333 2.25447C28.6709 2.24611 28.8055 2.21072 28.9295 2.15033C29.0534 2.08994 29.1642 2.00573 29.2556 1.90251C29.347 1.79929 29.4172 1.67907 29.4621 1.54874C29.507 1.4184 29.5259 1.28048 29.5175 1.14287C29.5091 1.00526 29.4737 0.870643 29.4134 0.746707C29.353 0.622772 29.2688 0.511945 29.1655 0.420553C29.0623 0.329162 28.9421 0.258996 28.8118 0.214062C28.6814 0.169129 28.5435 0.150307 28.4059 0.158673L24.012 0.425373C23.8096 0.437649 23.615 0.508411 23.452 0.629073L20.5806 2.74867L20.2943 2.41127C20.1649 2.25821 19.9942 2.14556 19.8026 2.08673C19.611 2.02791 19.4065 2.02539 19.2135 2.07947C4.4274 6.17797 0.685899 14.613 0.533999 14.9707V14.9721C0.500399 15.0498 0.477999 15.131 0.464699 15.2136C0.460499 15.2409 0.462599 15.2682 0.460499 15.2955C0.456299 15.3466 0.448599 15.397 0.452099 15.4481C0.452099 15.453 0.454199 15.4586 0.454899 15.4635C0.457699 15.4971 0.467499 15.5293 0.473099 15.5629C0.480799 15.6056 0.483599 15.649 0.496899 15.691L0.505299 15.7162L0.508099 15.7253L0.509499 15.7288C0.610299 16.0543 0.719499 16.3728 0.834299 16.6857C0.896599 16.8565 0.964499 17.0196 1.031 17.1848C1.0849 17.3192 1.1381 17.455 1.1948 17.5873C1.3117 17.8595 1.43564 18.1286 1.5665 18.3944C6.1886 27.8353 17.1898 27.843 26.994 27.843H59.516C59.9332 27.843 60.3112 27.5959 60.4785 27.2137L62.883 21.7082L64.2228 18.6415L65.4625 15.8037C65.5683 15.5625 65.5792 15.2903 65.4933 15.0414ZM61.2338 20.2361H5.2793C4.93991 19.8431 4.62546 19.4293 4.3378 18.9971C4.2755 18.9047 4.2125 18.8116 4.1523 18.7171C4.04425 18.5453 3.93993 18.3712 3.8394 18.1949C3.775 18.0815 3.7127 17.9653 3.6504 17.8491C3.5601 17.679 3.4691 17.5089 3.3837 17.3318C3.28986 17.1336 3.20047 16.9333 3.1156 16.7312C3.0722 16.6304 3.026 16.5352 2.984 16.4323L29.9403 16.44H29.9543C29.9809 16.44 30.0061 16.4344 30.032 16.4323H62.8935L61.2338 20.2361ZM33.7931 9.62477L34.2894 11.1879C34.357 11.4003 34.4905 11.5856 34.6704 11.7171C34.8504 11.8486 35.0675 11.9195 35.2904 11.9194H47.7259C48.183 11.9194 48.5876 11.6233 48.7269 11.1879L49.2232 9.62477H57.9025L59.3298 14.3316H30.4268L26.4235 9.62477H33.7931ZM19.1316 4.28587L23.3526 9.25517L23.4128 9.32587L27.6653 14.3316H3.3375C5.0126 11.9299 9.4128 7.13137 19.1316 4.28587ZM58.8286 25.7423H26.994C19.8715 25.7423 12.5845 25.7402 7.6327 22.3354H60.3161L58.8286 25.7423Z" fill="#9A9A9A" />
        </svg>

        <svg width="56" height="22" viewBox="0 0 56 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.9586 4.34194C52.8513 4.23735 52.7037 4.17924 52.5581 4.18266C50.888 4.21 49.2153 4.23666 47.5412 4.26332C46.567 4.27905 45.5929 4.29477 44.6188 4.30981L46.5493 0.784515C46.6135 0.666937 46.6108 0.522015 46.5417 0.406488C46.4727 0.29096 46.3462 0.219183 46.2116 0.221234L44.4616 0.23969C44.3426 0.240374 44.2298 0.297797 44.1594 0.392817L41.2125 4.3645C39.6012 4.39047 37.99 4.41577 36.3835 4.44243C32.8309 4.49985 29.158 4.55864 25.6258 5.41313C24.5704 5.66811 23.7398 5.91147 22.9687 6.19584L22.966 6.18901C22.0404 6.52739 21.0984 6.93549 20.0744 7.43315C20.073 7.43383 20.0723 7.43383 20.0709 7.43451C19.991 7.47348 19.9103 7.51244 19.8296 7.55278C18.2218 8.34711 16.4042 9.36088 14.1333 10.6706L14.1401 10.6823H11.6737C10.0508 10.6823 8.46011 11.2414 7.19409 12.2559L4.82339 14.1556H43.8935V8.27807C44.0323 7.95405 44.2257 7.75375 44.599 7.53569C44.8676 7.37846 45.1807 7.25063 45.5287 7.15424C46.5506 6.87465 47.6369 6.73315 48.6875 6.59643L52.6449 6.08237C52.9204 6.04272 53.1282 5.80346 53.1282 5.52592V4.74321C53.1282 4.5935 53.0667 4.44721 52.9586 4.34194ZM22.2133 7.56577V7.56645H22.2072V7.56577H22.2133ZM26.9288 10.6823H16.8731C19.7654 9.05805 21.5243 8.19399 23.1704 7.57123L26.9288 7.59243V10.6823ZM31.1752 10.5107H28.2959V7.76948C29.2578 7.77426 30.2216 7.77973 31.1752 7.78452V10.5107ZM38.6216 10.6823H32.5424V7.62045C33.4687 7.62592 34.3779 7.63071 35.2584 7.63549C36.7301 7.64369 38.1397 7.96225 38.6216 8.37856V10.6823ZM54.805 16.7635C54.6594 15.8865 53.9082 15.2494 53.0181 15.2494H0.535889V16.2748H1.27349L3.3981 19.584C3.63052 19.6319 3.86431 19.679 4.09946 19.7255C4.33599 19.7727 4.57456 19.8185 4.81382 19.8629C17.4063 22.2261 33.4831 22.0443 47.8372 21.6307C47.8994 20.7537 48.6329 20.0591 49.525 20.0591H55.1885C55.2446 20.0591 55.2993 20.0625 55.354 20.068L54.805 16.7635ZM12.5781 18.1676H9.02134V17.1422H12.5781V18.1676ZM18.4802 18.1676H14.9228V17.1422H18.4802V18.1676ZM52.42 18.1676H50.0616V17.1422H52.42V18.1676Z" fill="#9A9A9A" />
        </svg>

      </div>

      <div className="container">






        <form onSubmit={handleSubmit}>
          <h1>Perfil Embarcação</h1>
          <div className="form-section">
            <div className="input-field">
              <input
                type="text"
                placeholder="Nome"
                required
                value={usernome}
                onChange={(e) => setUserNome(e.target.value)}
              />


            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Modelo"
                required
                value={usermodelo}
                onChange={(e) => setUserModelo(e.target.value)}
              />

            </div>

            <div className="input-field">
              <input
                type="text"
                placeholder="Ano"
                required
                value={userano}
                onChange={(e) => setUserAno(e.target.value)}
              />

            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Capacidade"
                required
                value={usercapacidade}
                onChange={(e) => setUserCapacidade(e.target.value)}
              />

            </div>
          </div>

          <div className="form-section">

            <div className="input-field">
              <input
                type="text"
                placeholder="Animais Permitidos"
                required
                value={useranimaispermitidos}
                onChange={(e) => setUserAnimaisPermitidos(e.target.value)}
              />

            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Localização"
                required
                value={userlocalizacao}
                onChange={(e) => setUserLocallizacao(e.target.value)}
              />

            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Roteiros"
                required
                value={userroteiros}
                onChange={(e) => setUserRoteiros(e.target.value)}
              />

            </div>
          </div>




        </form>
      </div>
    </div>
  );
};

export default PerfilEmbarcacao;