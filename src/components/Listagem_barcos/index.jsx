import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./index.css";
import { Navigate, useNavigate } from "react-router-dom";
import { axiosapi } from "../../config/axios";
import { useContextGlobal } from "../../contexts/GlobalContext";

const CardBarco = React.lazy(() => import("../Card_barco"));

function ListagemBarcos() {
  const [barcos, setBarcos] = useState([]); // Lista de barcos
  const navigate = useNavigate("/embarcacao");
  const {categoriaSelecionada, setCategoriaSelecionada} = useContextGlobal(); 


  const barcosFiltrados = categoriaSelecionada
  ? barcos.filter(barco => barco.categoria === categoriaSelecionada)
  : barcos;
  useEffect(() => {
    const fetchBarcos = async () => {
      try {
        const resultCard = await axiosapi.get(`/embarcacao/`, { responseType: "json" });

        // Função para transformar a imagem em Base64
        const transformarImagem = async (id) => {
          const resultImage = await axiosapi.get(`/imagem/${id}`, { responseType: "arraybuffer" });
          const base64String = btoa(
            new Uint8Array(resultImage.data).reduce((data, byte) => data + String.fromCharCode(byte), "")
          );
          const formato = resultImage.headers["content-type"];
          return `data:${formato};base64,${base64String}`; // Retorna a imagem em Base64
        };

        // Formatando os dados dos barcos
        const formattedData = await Promise.all(
          resultCard.data.map(async (barco) => {
            let imagemUrl = "./src/assets/barco.jpg";
            switch (barco.categoria) {
              case "Jet Ski":
                imagemUrl = "./src/assets/jetskigenerica.jpg";
                break;
              case "Iate":
                imagemUrl = "./src/assets/iategenerico.jpg";
                break;
              case "Lancha":
                imagemUrl = "./src/assets/lanchagenerica.jpg";
                break;
              case "Veleiro":
                imagemUrl = "./src/assets/veleirogenerico.jpg";
                break;
              default:
                imagemUrl = "./src/assets/barco.jpg"; 
                break;
            }
            if (barco.imagem[0]) {
              const idImagem = barco.imagem[0].id_imagem; // Pegando o ID da primeira imagem do barco
              imagemUrl = await transformarImagem(idImagem); // Carregando a imagem
            }

            return {
              ...barco,
              cidade: barco.enderecoEmbarque || "Não registrada",
              nome: `${barco.fabricante} ${barco.nome} (${barco.anoFabricacao})` || "Sem descrição",
              potencia: barco.potencia || "Não informado",
              tamanho: barco.tamanho || "não informado",
              capacidade: barco.capacidade || 20,
              categoria: barco.categoria || "Não foi possivel carregar...",
              quantidadeCabines: barco.quantidadeCabines || 5,
              quantidadeBanheiro: barco.quantidadeBanheiro || 2,
              pet: barco.pet ? "Tem" : "Não tem",
              preco: barco.preco || "Não disponibilizado",
              url: imagemUrl,
              id: barco.idEmbarcacao,
            };
          })
        );

        setBarcos(formattedData);
      } catch (error) {
        console.error("Erro ao carregar os dados ou imagem:", error);
      }
    };

    fetchBarcos(); // Chama a função ao carregar o componente
  }, []); // Executa apenas uma vez, ao montar o componente
  console.log(barcos);
  return (
    <div className="listagem-container">
      <Suspense fallback={<div>Carregando barcos...</div>}>
        {/* Renderiza os barcos, se houver */}
        {barcosFiltrados.length > 0 ? (
          barcosFiltrados.map((barco) => (
            <div onClick={() => navigate("/embarcacao", { state: { id: barco.id } })} key={barco.id}>
              <CardBarco user={barco} />
            </div>
          ))
        ) : (
          <>
            <div className="carregando">Carregando dados...</div>
            <div className="ocean">
              <div className="wave2"></div>
              <div className="wave2"></div>
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
}

export default ListagemBarcos;
