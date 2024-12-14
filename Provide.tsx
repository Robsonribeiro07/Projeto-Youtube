import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Definindo a estrutura do vídeo
interface Video {
    videoId: string;
    ImgUrlVideo: string;
    title: string;
    views: string; // Alterado para number para cálculos
    description: string;
    comments: number;
    dislikes: number;
    likes: number;
    category?: string[];
}

interface propsUser {
    name: string;
    imgUrl: string;
    Inscrito: boolean
    Inscritos: number
    VideoNovo?: boolean;
    VideosUsers?: Video[];
}

type VideoExibir = {
    videoAtual: VideoAtual;
    VideoPage: propsUser[]   
  };

interface UserProps {
    name: string;
    imgUrl: string;
    VideoNovo?: boolean;
    VideosUsers?: Video[];
    Inscrito?: boolean;
    Inscritos?: number;
}

interface UserContextProps {
    user: UserProps[];
    filteredUser: UserProps[];
    inputValue: string;
    SetUser: React.Dispatch<SetStateAction<UserProps[]>>;
    filtered: string;
    SetFiltered: React.Dispatch<SetStateAction<string>>;
    VideoAExibir: VideoExibir;
    setVideoAExibir: React.Dispatch<SetStateAction<VideoExibir>>;
    animationHeader: boolean;
    setAnimationHeader: React.Dispatch<SetStateAction<boolean>>;
    handleAnimationStartWhitoutNavigate: (locale: string) => void;
    disabledLeft: boolean;
    setDisabled: React.Dispatch<SetStateAction<boolean>>;
    setInputValue: React.Dispatch<SetStateAction<string>>
    setFilteredUserWhitoutInput: React.Dispatch<SetStateAction<string>>;
    setLimited:  React.Dispatch<SetStateAction<number>>;

}

interface ProviderContentProps {
    children: ReactNode;
}

type VideoAtual = {
    Inscrito?: boolean;
    UserInformation: {
      name: string;
      imgUrl: string;
      Inscritos: number
      Inscrito: boolean

    };
    VideoId: string;
    VideoImg: string;
    VideoLike: number;
    VideoComent: number;
    VideoDesript: string;
    VideoTitle: string;
    
  };

  const initialVideoExibir: VideoExibir = {
    videoAtual: {
      UserInformation: {
        name: "",
        imgUrl: "",
        Inscritos: 0,
        Inscrito: false
      },
      VideoId: "",
      VideoImg: "",
      VideoLike: 0,
      VideoComent: 0,
      VideoDesript: "",
      VideoTitle: "",
    },
    VideoPage: [],
  };
// Criando o contexto
export const ProductContext = createContext<UserContextProps>({
    user: [],
    filteredUser: [],
    SetUser: () => {},
    SetFiltered: () => {},
    filtered: '',
    VideoAExibir: initialVideoExibir,
    setVideoAExibir: () => {},
        animationHeader: false,
    setAnimationHeader: () => {},
    handleAnimationStartWhitoutNavigate: () => {},
    disabledLeft: false,
    setDisabled: () => {},
    setInputValue: () => {},
    inputValue: '',
    setFilteredUserWhitoutInput: () => {},
    setLimited: () => {}
});

    export const ProviderContent: React.FC<ProviderContentProps>= ({ children}) => {
        const [user, SetUser] = useState<UserProps[]>(
            [
                { name: "Mylon",
                imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nRU8lK76jaBrhna3OJk9LJOG2wZKXMK21LynWksYTZ7g=s88-c-k-c0x00ffffff-no-rj",
                VideoNovo: true,
                Inscritos: 150,
                Inscrito: true,
                VideosUsers: [
                    {
                    ImgUrlVideo: "https://i.ytimg.com/vi/b1orz-TSCGQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDw60wOh3T-5d0jK2X1GFzLe1PmfA",
                    videoId: "b1orz-TSCGQ",
                    title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                    description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                    views: '100',
                    likes: 2500,
                    dislikes: 100,
                    comments: 10000,
                    
                    category: [
                        "Filmes",
                        "league of legends",
                        "lol",
                        'Jogos'
                    ]
                    },
                    {
                        ImgUrlVideo: "https://i.ytimg.com/vi/hfxdEOv9reo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzR9aOMmGkN1IhSTIUh_JsO7gCRw",
                        videoId: "hfxdEOv9reo",
                        title: "COMO CARREGAR JOGOS POR SIMPLESMENTE EXISTIR?",
                        description: `
                        164.076 visualizações  11 de dez. de 2024
                        Avalie o vídeo clicando no gostei e compartilhando com seus amigos! 👍

                        🖥️ STREAM NO SITE ROXO! /Mylonzete
                        📸 INSTAGRAM: /Mylonzete
                        🐦TWITTER: /Mylonzete

                        --------------------------------------------------------------------------

                        🎬 Edição por equipe Matheus Miranda (Entre em contato para orçamentos 👇)

                        📹 Youtube: https://abrir.link/jlIWq
                        📸 Instagram: @matheus.mov
                        📧 Email: ocontatomatheusmiranda@hotmail.com
                        Transcrição`,
                        views: '100',
                        likes: 2500,
                        dislikes: 100,
                        comments: 10000,
                        
                        category: [
                            "Filmes",
                            "league of legends",
                            "lol",
                            'Jogos'

                        ]
                        }   

                ],
                

                },
                { name: "Ei Nerd",
                    imgUrl: "https://yt3.ggpht.com/9z8IDvlZ_ytBTWgMXLpkrwcYaSyjEk5vVITs5I5hgMSK6mB0iJ_YonxbNXnGl_YWq_E4pFHC=s88-c-k-c0x00ffffff-no-rj",
                    VideoNovo: true,
                    Inscrito: true,
                    Inscritos: 100,
                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/hVOYFDXYG1U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7Tgxt33vPN5e1dt_k4dpinx2qUg",
                            videoId: "hVOYFDXYG1U&t=2s",
                            title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '100',
                            likes: 250,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "Filmes",
                                "league of legends",
                                "lol"
                            ]
                        }

                    ]
                },
                { name: "Voce Sabia?",
                    imgUrl: "https://yt3.ggpht.com/ytc/AIdro_kdYOUtp16eJsT8yUlmbU2sDUP8ESohkDlSLW9KDUXwJQI=s88-c-k-c0x00ffffff-no-rj",
                    Inscrito: true,
                    Inscritos: 50,

                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/Zzt2q42hcWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAOPrYjbL48AhlYg1AlYzx59k3oqw",
                            videoId: "Zzt2q42hcWk",
                            title: "A MULHER DA CASA ABANDONADA - Entenda o Caso",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '100',
                            likes: 250,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "games",
                                "league of legends",
                                "lol",
                                "Jogos"
                            ]


                        }
                    ]
                },
                
                { name: "Kennzy",
                    imgUrl: "https://yt3.googleusercontent.com/ytc/AIdro_kB6R34ZPF01lrZil-IB6XUHwznP5w1kzJWpBPCasXbHMs=s160-c-k-c0x00ffffff-no-rj",
                    Inscritos: 130,

                    VideosUsers: [
                            {
                                ImgUrlVideo: "https://i.ytimg.com/vi/nbythSlgENA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5SKUTjIyUG-s5HdaxrVU1euImLg",
                                videoId: "nbythSlgENA",
                                title: "RUMBLE JUNGLE: BROKEN NO NOVO META! (FT. GUIVEN)",
                                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                                views: '100',
                                likes: 250,
                                dislikes: 100,
                                comments: 10000,
                                category: [
                                    "games",
                                    "league of legends",
                                    "lol",
                                    'Jogos'

                                ]
                            }   
                                ]
    
    
                },
                { name: "Maroon 5",
                    imgUrl: "https://yt3.googleusercontent.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s160-c-k-c0x00ffffff-no-rj",
                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAdTylKVqTAOtDI9ObrKxxOfdEomg",
                            videoId: "09R8_2nJtjg",
                            title: "Maroon 5 - Sugar (Official music video)?",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '4.148.864.439',
                            likes: 330,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                "Jogo"

                            ]
                        }   
                            ]

                },
                { name: "Kamikat",
                    imgUrl: "https://yt3.ggpht.com/DZ9RCB1kDxJbK6ezOMI-LNMbu3IKgndciuCUnIqsCyidBoCAT0fWv9s5cd_Da56bvqprn3ieZQ=s88-c-k-c0x00ffffff-no-rj",
                    Inscritos: 80,
                    
                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/ffPPZdZCIVU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBxvf7weIDBFXw1yjyiXPTjgR4znw",
                            videoId: "ffPPZdZCIVU",
                            title: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 549,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        },
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/ppzzANezGso/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA327e71PbAGFavCI8Htm6Vw2DrUw",
                            videoId: "ppzzANezGso",
                            title: "É OBRIGATÓRIO pegar JINX quando seu suporte pega MILIO?!",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 549,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        },
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/HTIDstYf-Gg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFbUwGu7JEEkOAbLJ25FWiK8-5ow",
                            videoId: "HTIDstYf-Gg",
                            title: "Vai fazer UM ANO que Hwei foi lançado, já passou da hora de uma SKIN NOVA! 🎨",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 549,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        },
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/fSq6fRqUXvA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDVJslqXHqsrNOFapqEd8cnrs1IkA",
                            videoId: "fSq6fRqUXvA",
                            title: "Jogar de ANNIE NO HIGH ELO é mais DIFÍCIL do que parece! 🐻",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 17.000,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        },
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/CzY2VuxAscg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBDG2Zd3Uzgf6MkmvOipbOkuGAbbA",
                            videoId: "CzY2VuxAscg",
                            title: "Ainda existe jogar de TRISTANA NA MID LANE?",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 10.000,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        },
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/HE5p1q6jpxA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAn1cwtQQ8bUNrqp28pxiBp8Io0dw",
                            videoId: "HE5p1q6jpxA",
                            title: "Não consegue SUBIR DE MAGUINHO no mid?! Jogar na BOT LANE é a SOLUÇÃO!?",
                            description: "O quão RUINS (ou boas?!) foram as MUDANÇAS NO SMOLDER?",
                            views: '69',
                            likes: 7900,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                        }   
                            ]
                }  
                ,
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj",
                    Inscritos: 40,

                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/PEXM5gQYwxA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCWEyCLNbjdfAkjAWWJltTQucUaTA",
                            videoId: "PEXM5gQYwxA&t=2s",
                            title: "JOGAR DE AMBESSA E MANEIRO DEMAIS!",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '4.148.864.439',
                            likes: 589,
                            dislikes: 100,
                            comments: 10000,
                            category: [
                                "league of legends",
                                "lol",
                                'Jogos'

                            ]
                }, 
            ]} , 
            { name: "eSports TVZAN",
                imgUrl: "https://yt3.googleusercontent.com/ytc/AIdro_kNX0T8nPGEyvSada9IVBOS8IZ3atbj0z7LMDArQWeu8no=s160-c-k-c0x00ffffff-no-rj",
                Inscritos: 40,

                VideosUsers: [
                    {
                        ImgUrlVideo: "https://i.ytimg.com/vi/PRUlA0fK_ss/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrzPpt6FqCcp7p13mVAJNyVUevgQ",
                        videoId: "PRUlA0fK_ss",
                        title: "JOGAR DE AMBESSA E MANEIRO DEMAIS!",
                        description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                        views: '5,2',
                        likes: 317,
                        dislikes: 100,
                        comments: 10000,
                        category: [
                            "league of legends",
                            "lol",
                            "Jogos"

                        ]
            },
            {
                ImgUrlVideo: "https://i.ytimg.com/vi/UV7uQiwSKNw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBRzXawxtx5ZF35B8nAUiZYvnn-_A",
                videoId: "UV7uQiwSKNw",
                title: "FAKER VOLTOU pra SOLOQ e PUXOU um TRYNDAMERE MID, ELE É O MELHOR!",
                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                views: '5,2',
                likes: 361,
                dislikes: 100,
                comments: 10000,
                category: [
                   
                    "league of legends",
                    "lol",
                    "Jogos"


                ]
           }, 
        ]},
        { name: "Freeme Music",
            imgUrl: "https://yt3.googleusercontent.com/LC83_I8Ug5YXN9z5LtuUgW2X2DzjBNb6Zxhzy0LXVc76CSa--3_SnKrEoL5qK1RMaZvoiGyrVJ0=s160-c-k-c0x00ffffff-no-rj",
            Inscritos: 351,

            VideosUsers: [
                {
                    ImgUrlVideo: "https://i.ytimg.com/vi/PP2Uvesx4ls/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCRdQOFc-3USghEVmb_d98vKoqn-A",
                    videoId: "PP2Uvesx4ls",
                    title: "Cool Gaming Music 2024 ♫ Best Music Mix, NCS, Electronic, House ♫ Best Of EDM 2024",
                    description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                    views: '761',
                    likes: 317,
                    dislikes: 100,
                    comments: 10000,
                    category: [
                        "Musicas",

                    ]
        }, 
        {
            ImgUrlVideo: "https://i.ytimg.com/vi/Obbq48DsZHE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBtCVGUynx3LqQym4_lBKmaNrZzvg",
            videoId: "Obbq48DsZHE",
            title: "Beautiful Female Vocal Music 2024 ♫ Top 30 Songs For Gaming ♫ Best EDM Remixes, NCS, House",
            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
            views: '761',
            likes: 11,
            dislikes: 100,
            comments: 10000,
            category: [
                "Musicas", "Music", "Eletronica"

            ]
        }, 
        {
            ImgUrlVideo: "https://i.ytimg.com/vi/qO51Dt5UbcI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNI_EjdWSeAONdzqM-obS_nRMH-A",
            videoId: "qO51Dt5UbcI",
            title: "Legendary Music Mix For Gaming ♫ Top 30 Songs ♫ Best EDM, Trap, Dubstep, Electronic, House",
            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
            views: '3,3',
            likes: 11,
            dislikes: 100,
            comments: 10000,
            category: [
                "Musicas", "Music", "Eletronica"

            ]
               },
               {
                ImgUrlVideo: "https://i.ytimg.com/vi/qO51Dt5UbcI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNI_EjdWSeAONdzqM-obS_nRMH-A",
                videoId: "qO51Dt5UbcI",
                title: "Legendary Music Mix For Gaming ♫ Top 30 Songs ♫ Best EDM, Trap, Dubstep, Electronic, House",
                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                views: '3,3',
                likes: 11,
                dislikes: 100,
                comments: 10000,
                category: [
                    "Musicas", "Music", "Eletronica"
    
                ]
            },
       
      
    ]},
    { name: "Guiven2",
        imgUrl: "https://yt3.googleusercontent.com/n_JM0vQA-8J4KdGy5078x15g4_3TxH710-VryE4sSIAwwwFJyzbCioOkjXdqULCLRHL3eALa6g=s160-c-k-c0x00ffffff-no-rj",
        Inscritos: 40,

        VideosUsers: [
            {
                ImgUrlVideo: "https://i.ytimg.com/vi/BsHmnse2iNw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnrIKrnRUUvz_9OBaS_XfTOoNFOQ",
                videoId: "BsHmnse2iNw",
                title: "FIZEMOS O COMBO POPPY + YORICK",
                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                views: '270',
                likes: 270,
                dislikes: 100,
                comments: 10000,
                category: [
                    "league of legends",
                    "lol",
                    "Jogos"

                ]
    },
   
    ]},   
    { name: "Yoda SL",
        imgUrl: "https://yt3.googleusercontent.com/IjGab18zWcxNx4OyCq_MeISpZbrEsPhJJmTXzeLKW-sq75ZGFMg_pQ5x9EkdrCWUU2YeF5smoJM=s160-c-k-c0x00ffffff-no-rj",
        Inscritos: 1.21,

        VideosUsers: [
            {
                ImgUrlVideo: "https://i.ytimg.com/vi/KPJ3Vj8Cikw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAS3De3N-bEkgjoP1TzyUeEI1iyEg",
                videoId: "KPJ3Vj8Cikw",
                title: "ELE TENTOU GANHAR UMA PARTIDA DE LOL SEM SER VISTO! | YONEWS",
                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                views: '270',
                likes: 2,
                dislikes: 100,
                comments: 10000,
                category: [
                    "league of legends",
                    "lol",
                    "Jogos"

                ]
    },
   
]},


        ]
            
            
        
        
        )    

        const [VideoAExibir, setVideoAExibir] = useState<VideoExibir>({
            videoAtual: {
                UserInformation: { name: "", imgUrl: "" , Inscritos: 0, Inscrito: false},
                VideoId: "",
                VideoImg: "",
                VideoLike: 0,
                VideoComent: 0,
                VideoDesript: "",
                VideoTitle: '',

            },
            VideoPage: []
        });
        const [disabledLeft, setDisabled] = useState(false)
          
        const [filtered, SetFiltered] = useState('')
        const [filteredUser, setFilteredUser] = useState<UserProps[]>(user);
        const [inputValue, setInputValue] = useState('')
        const [filteredUserWhitoutInput, setFilteredUserWhitoutInput] = useState('')
       const [shuffledVideos, setShuffledVideos] = useState<any[]>([]);
       const [limited, setLimited] = useState(6)
   





        const navigate = useNavigate()
        useEffect(() => {

            const filter = filtered?.length > 0 ? (filtered === "Tudo" ? user.map(user => ({...user, VideosUsers: user.VideosUsers})) : user.map(users => ({...users, VideosUsers: users.VideosUsers?.filter(video => video.category?.some(cat => cat.toLowerCase() === filtered.toLowerCase()))}))

        ) : user
        setFilteredUser(filter)
        }, 
        
        
          
        [filtered, user])


        const handleAnimationStartWhitoutNavigate = (locale: string) => {
            navigate(locale)
          setInputValue('')
          setFilteredUserWhitoutInput('')
            setAnimationHeader(true)
            setTimeout(() => {
                setAnimationHeader(false)
            }, 500)
        }
        

        const [animationHeader, setAnimationHeader] = useState<false | true>(false)
        return (
            // @ts-expect-error problema na tipagem
            <ProductContext.Provider value={{user, filteredUser, SetUser, animationHeader, setAnimationHeader, SetFiltered, filtered, handleAnimationStartWhitoutNavigate, disabledLeft, setDisabled, VideoAExibir, setVideoAExibir, inputValue, setInputValue, setFilteredUserWhitoutInput, filteredUserWhitoutInput, shuffledVideos, setShuffledVideos, limited, setLimited}}>{children}</ProductContext.Provider>
        )
    }