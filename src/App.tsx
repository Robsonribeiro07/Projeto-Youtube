import { ThemeProvider } from "styled-components"
import { DefaultTheme } from '.././Theme/defaultTheme'
import { AppRouter} from '../router.tsx'
import { BrowserRouter } from "react-router-dom"
import {ProviderContent } from "../Provide.tsx"
import {GlobalStyle} from '../Theme/global.ts'
export function App() {
  return (
   <ThemeProvider theme={DefaultTheme}>
    <BrowserRouter basename={'/Projeto-Youtube'} >
    <ProviderContent>
    <GlobalStyle/>
     <AppRouter/>
     </ProviderContent>
     </BrowserRouter> 
   </ThemeProvider>
     
  )
}