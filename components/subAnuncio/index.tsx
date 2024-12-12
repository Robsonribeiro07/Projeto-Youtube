import { ArrowSquareOut, DotsThreeVertical } from "@phosphor-icons/react";
import { SubAnuncio } from "./style";

export function SubAnuncioContent () {


    return(
        <SubAnuncio>
            <img src="https://lh4.googleusercontent.com/proxy/70GD44ebaAEC4o7SB1T_C34nPyicNYTx_yoKkHD-xLNGH_16C_M0UCIlkzTY6da1gyof_5zxjd4kdrOInAbha7uqwHFk4e_mfCbRowXeayn4XrzMJ3dlaiSrjr6xBXVQmw" alt="" />

            <div className="detailsText">
                <div className="top">
                <p>Filmes no Streaming do Mercado Livre</p>

                <h5>Assista seus filmese series favoritos no Mercado Play,a qualquer hora</h5>

                <h4>Patrocinado <h5>Mercado Livre</h5></h4>
                </div>

                <button><p>Veja Mais</p> <ArrowSquareOut size={28} className="arrow" weight="light" /></button>
            </div>

            <DotsThreeVertical size={30} className="list"/> 

        </SubAnuncio>
    )
}