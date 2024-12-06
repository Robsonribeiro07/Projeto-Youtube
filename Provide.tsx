import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


    interface Video {
        videoId: string;
        ImgUrlVideo: string;
        title: string;
        views: string;
        description: string;
        comments: number;
        dislikes: number;
        category?: string[]
        likes: number;
    }
    
 
    
    interface UserProps {
        name: string;     // Nome do usuário principal
        imgUrl: string;   // URL da imagem do usuário principal
        VideoNovo?: boolean; // Indicador de "vídeo novo"
        VideosUsers?: Video[]; // Lista de usuários com vídeos
    }
    
    interface UserContextProps {
        user: UserProps[];
        SetFiltered:  React.Dispatch<SetStateAction<string>>
        filteredUser: UserProps[];
        filtered: string;
        SetUser: React.Dispatch<React.SetStateAction<UserProps[]>>;
        animationHeader: boolean;
        setAnimationHeader: React.Dispatch<React.SetStateAction<boolean>>;
        handleAnimationStart: (locale: string) => void;
    }
    
    interface ProviderContentProps {
        children: ReactNode;
    }
    
    export const ProductContext = createContext<UserContextProps>({
        user: [],
        animationHeader: false,
    filteredUser: [],
    filtered: '',
    handleAnimationStart: () => {},
    setAnimationHeader: () => {},
    SetUser: () => {},
    SetFiltered: () => {},
    })






    export const ProviderContent: React.FC<ProviderContentProps>= ({ children}) => {
        const [user, SetUser] = useState<UserProps[]>(
            [
                { name: "mylon",
                imgUrl: "https://yt3.ggpht.com/ytc/AIdro_nRU8lK76jaBrhna3OJk9LJOG2wZKXMK21LynWksYTZ7g=s88-c-k-c0x00ffffff-no-rj",
                VideoNovo: true,
                VideosUsers: [
                    {
                    ImgUrlVideo: "https://i.ytimg.com/vi/_l-ohAERgRs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAu_meRXSXLahN0BTq26mRjKUCPwQ",
                    videoId: "h9E47y_70_w",
                    title: "TODOS 0/13 E TEM QUE VENCER FLEX",
                    description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                    views: '300',
                    likes: 2500000,
                    dislikes: 1500000,
                    comments: 10000,
                    category: [
                        "League of legendes",
                        "jogos"
                    ]
                    },
                    {
                    ImgUrlVideo: "https://i.ytimg.com/vi/b1orz-TSCGQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDw60wOh3T-5d0jK2X1GFzLe1PmfA",
                    videoId: "h9E47y_70_w",
                    title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                    description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                    views: '100',
                    likes: 2500000,
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
                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/hVOYFDXYG1U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7Tgxt33vPN5e1dt_k4dpinx2qUg",
                            videoId: "h9E47y_70_w",
                            title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '100',
                            likes: 2500000,
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
                    VideosUsers: [
                        {
                            ImgUrlVideo: "https://i.ytimg.com/vi/Zzt2q42hcWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAOPrYjbL48AhlYg1AlYzx59k3oqw",
                            videoId: "h9E47y_70_w",
                            title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '100',
                            likes: 2500000,
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
                    VideosUsers: [
                            {
                                ImgUrlVideo: "https://i.ytimg.com/vi/nbythSlgENA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5SKUTjIyUG-s5HdaxrVU1euImLg",
                                videoId: "h9E47y_70_w",
                                title: "COMO BUILDAR FULL DANO E AINDA ASSIM NAO FICA PAPEL?",
                                description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                                views: '100',
                                likes: 2500000,
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
                            videoId: "h9E47y_70_w",
                            title: "Maroon 5 - Sugar (Official music video)?",
                            description: "A transformação do mercado de varejo digital é um tema de discussão abordado no curso de Tecnologia em Varejo Digital da Fortune. Neste episódio, nosso professor, Guiven, discute sobre a evolução do varejo digital e as transformações que vão impactar a próxima década.",
                            views: '4.148.864.439',
                            likes: 2500000,
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
                { name: "Giselleh Freitas",
                    imgUrl: "https://yt3.ggpht.com/9A3mp3Ug1ietDMf6tdUMBdLu50XFTkHCK2wKmqHqV6DsDNifv8G8uJzzUNCv3bpN--eUpep-=s88-c-k-c0x00ffffff-no-rj"
                }  
                ,
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
                { name: "Ayel",
                    imgUrl: "https://yt3.ggpht.com/9ZRvsM-OTGOubSygKYufho7sdgkJ51bkgzoINhcl918fcPmiN-rFKeRbxmtg9bS9WtGmMAJxqC8=s88-c-k-c0x00ffffff-no-rj"
                }, 
            ]
            
            
        
        
        )    
        const [filtered, SetFiltered] = useState('')
        const [filteredUser, setFilteredUser] = useState<UserProps[]>(user);


        const navigate = useNavigate()
        useEffect(() => {

            const filter = filtered?.length > 0 ? (filtered === "Tudo" ? user.map(user => ({...user, VideosUsers: user.VideosUsers})) : user.map(users => ({...users, VideosUsers: users.VideosUsers?.filter(video => video.category?.some(cat => cat.toLowerCase() === filtered.toLowerCase()))}))

        ) : user
            setFilteredUser(filter)
        }, 
        
        
          
        [filtered, user])


        const handleAnimationStart = (locale: string) => {
            navigate(locale)
            setAnimationHeader(true)
    
            setTimeout(() => {
                setAnimationHeader(false)
            }, 500)
        }
        

        const [animationHeader, setAnimationHeader] = useState<false | true>(false)
        return (
            <ProductContext.Provider value={{user, filteredUser, SetUser, animationHeader, setAnimationHeader, SetFiltered, filtered, handleAnimationStart}}>{children}</ProductContext.Provider>
        )
    }