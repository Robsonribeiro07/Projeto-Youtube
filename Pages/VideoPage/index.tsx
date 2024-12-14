  import { useContext, useEffect, useState } from "react";
  import { Bell, CaretDown, ShareFat, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
  import { RightSide, VideoPage } from "./style";
  import { VideoPageNavigation } from "../../components/NavigationVideo/index.tsx";
  import { AnuncionContentPage } from "../../components/Anuncios";
  import { SubAnuncioContent } from "../../components/subAnuncio/index.tsx";
  import { SubVideo } from "../../components/subVideo/index.tsx";
  import { ProductContext } from "../../Provide.tsx";
  import { CommentDescription } from "../../components/CommentDescription/index.tsx";
  import YoutubePlayer from 'youtube-player'

  export function VideoPageHome() {
    const { VideoAExibir, setVideoAExibir } = useContext(ProductContext);
    const [videoState, setVideoState] = useState(VideoAExibir);
    const [savedTime, setSavedTime] = useState<number>(0);

    useEffect(() => {
      const savedVideoState = localStorage.getItem("NovoVideo"); /// video Salvo
      const savedTimeValue = localStorage.getItem("SavedTime"); // time do video

      if (savedVideoState) {
        const parsedState = JSON.parse(savedVideoState);
        setVideoState(parsedState);

        if (setVideoAExibir) setVideoAExibir(parsedState);
      }

      setSavedTime(savedTimeValue ? parseFloat(savedTimeValue) : 0);
    }, [setVideoAExibir, savedTime]);

    useEffect(() => {
      if (videoState && videoState.videoAtual.VideoId) { // adicionando o Iframe do youtube
        const ytPlayer = YoutubePlayer("youtube-player", {
          videoId: videoState.videoAtual.VideoId,
          playerVars: {
            autoplay: 1,
          },
          
        });

        ytPlayer.on("ready", () => { // verificando se o video ta pronto e movendo time para o timeSalvo
          if(savedTime > 0) {
            ytPlayer.seekTo(savedTime, true)
          }
        })

        ytPlayer.on("stateChange", async (event: any) => { // salvando o video sempre que for
          if (event.data === 2) { // Pausado
            const currentTime = await ytPlayer.getCurrentTime();
            localStorage.setItem("SavedTime", currentTime.toString());
          }
        });

      }
    }, [videoState]);

    const handleInscrito = () => {
      setVideoState((prev) => {
        const updatedState = {
          ...prev,
          videoAtual: {
            ...prev?.videoAtual,
            Inscrito: !(prev?.videoAtual?.Inscrito ?? false),
          },
        };
        localStorage.setItem("NovoVideo", JSON.stringify(updatedState));
        setVideoAExibir(updatedState);
        return updatedState;
      });
    };

    const handleLike = () => {
      setVideoAExibir((prev) => {
        const updatedState = {
          ...prev,
          videoAtual: {
            ...prev.videoAtual,
            VideoLike: prev.videoAtual.VideoLike + 1,
          },
        };

        localStorage.setItem("NovoVideo", JSON.stringify(updatedState));
        return updatedState;
      });
    };

    return (
      <VideoPage>
        <div className="leftSide">
          <div className="VideoContainer">
            <div id="youtube-player"></div>
          </div>

          <h3>{videoState.videoAtual.VideoTitle}</h3>

          <div className="assets">
            <div className="leftSide">
              <div className="container">
                <div className="left">
                  <img src={videoState.videoAtual.UserInformation.imgUrl} alt="" />
                  <div className="profileDetails">
                    <h4>{videoState.videoAtual.UserInformation.name}</h4>
                    <p>{`${videoState.videoAtual.UserInformation.Inscritos ?? 0} mil Inscritos`}</p>
                  </div>
                  
                  <div className={`inscritionContent ${VideoAExibir.videoAtual.Inscrito ? "active" : ""}`}>
                    
                    {VideoAExibir?.videoAtual?.Inscrito ? (
                      <>
                        <Bell size={23} />
                        <p onClick={handleInscrito}>Inscrito</p>
                        <CaretDown size={20} />
                      </>
                    ) : (
                      <p className="Inscrito" onClick={handleInscrito}>
                        Inscreva-se
                      </p>
                    )}
                  </div>
                </div>

                <div className="rightSide">
                  <div className="assetLikes">
                    <ThumbsUp size={25} onClick={handleLike} />
                    <p>{videoState.videoAtual.VideoLike}</p>
                    <p className="separator"></p>
                    <ThumbsDown size={25} />
                  </div>

                  <div className="assetsShared">
                    <ShareFat />
                    <p>Compartilhar</p>
                  </div>

                  <span className="assetsOut">
                    <p>...</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="botSide">
              <CommentDescription />
            </div>
          </div>
        </div>

        <RightSide>
          <AnuncionContentPage />
          <VideoPageNavigation />
          <SubAnuncioContent />
          {VideoAExibir.VideoPage.filter(
            (user) =>
              !user.VideosUsers?.some(
                (video) => video.videoId === VideoAExibir.videoAtual.VideoId
              )
          ).map((user, index) => (

            // @ts-expect-error error na tipagem do video 
            <SubVideo video={user} key={index} />
          ))}
        </RightSide>
      </VideoPage>
    );
  }
