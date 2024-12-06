import  { useContext } from "react"
import { HomePageContent } from "./style.ts"
import { Navigation } from "../../components/navigation/index.tsx"
import { VideoDetails } from "../../components/VideoDetails/index.tsx"
import { ProductContext } from "../../Provide.tsx"
export function HomePage() {

    const {filteredUser} = useContext(ProductContext)

    return(
        <HomePageContent>
            <Navigation/>

            <div className="VideoContainer">
              {filteredUser.map((userData) => (
                userData.VideosUsers?.map((videoUser) => (
                    <VideoDetails VideoUser={videoUser} UserData={userData}/>
                ))
              ))}
            </div>
        </HomePageContent>
    )
}