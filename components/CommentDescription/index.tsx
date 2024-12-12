import { useState } from "react";
import { CommentDescriptionContent } from "./style";

export function CommentDescription() {
  const [isExpanded, setIsExpanded] = useState(true);

  const Max_length = 150;

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  const description = `
     ✨NOVO CANAL SECUNDÁRIO!  @kamikatplus  ✨
   / kamikatplus  

    Me siga nas redes para ficar por dentro das novidades! ❤️
          ✨LIVES NO YOUTUBE E NA PLATAFORMA ROXINHA✨

    0:00 Sobre Match-ups boas/ruins pro VEIGAR!
    1:19 Seleção de campeões + runas
    2:05 Gameplay: Soraka e Smolder vs Sylas e Ashe
    13:54 Encerramento

    Edição por:
    https://x.com/jean.vanzo
    https://x.com/Tati_Usagi

    #LeagueOfLegends #Kami #azir
  `;

  // Formata a descrição com <br> para novas linhas
  const formattedDescription = description.replace(/\n/g, "<br>");

  // Determina o texto a ser exibido com base na expansão
  const displayedDescription = isExpanded
    ? formattedDescription
    : `${description.slice(0, Max_length).replace(/\n/g, "<br>")}...`;

  return (
    <CommentDescriptionContent>
      <span>
        <h5>65.906 visualizações</h5>
        <p dangerouslySetInnerHTML={{ __html: displayedDescription }}></p>
        <button onClick={handleToggleExpand}>
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      </span>
    </CommentDescriptionContent>
  );
}
