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
    inputValue: ''
});

    export const ProviderContent: React.FC<ProviderContentProps>= ({ children}) => {
        const [user, SetUser] = useState<UserProps[]>(
            [
                { name: "mylon",
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
                        "lol"
                    ]
                    }   
                ]
                

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
                                "lol"
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
                                    "lol"

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
                                "Musicas",
                                "league of legends",
                                "lol"

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
                                "Musicas",
                                "league of legends",
                                "lol"

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
                                "Musicas",
                                "league of legends",
                                "lol"

                            ]
                }, 
            ]}]  
            
            
        
        
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





        const navigate = useNavigate()
        useEffect(() => {

            const filter = filtered?.length > 0 ? (filtered === "Tudo" ? user.map(user => ({...user, VideosUsers: user.VideosUsers})) : user.map(users => ({...users, VideosUsers: users.VideosUsers?.filter(video => video.category?.some(cat => cat.toLowerCase() === filtered.toLowerCase()))}))

        ) : user
        setFilteredUser(filter)
        }, 
        
        
          
        [filtered, user])


        const handleAnimationStartWhitoutNavigate = (locale: string) => {
            navigate(locale)
            setAnimationHeader(true)
            setTimeout(() => {
                setAnimationHeader(false)
            }, 500)
        }
        

        const [animationHeader, setAnimationHeader] = useState<false | true>(false)
        return (
            // @ts-expect-error problema na tipagem
            <ProductContext.Provider value={{user, filteredUser, SetUser, animationHeader, setAnimationHeader, SetFiltered, filtered, handleAnimationStartWhitoutNavigate, disabledLeft, setDisabled, VideoAExibir, setVideoAExibir, inputValue, setInputValue}}>{children}</ProductContext.Provider>
        )
    }