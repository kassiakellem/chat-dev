import { HeaderContainer, TextSpan } from "./HeaderContainer.ts"
import logo from "../../assets/logoSemNome.png"

export const Header = () => {
    return (
        <HeaderContainer>

            <img src={logo} alt="logo"/>
            <TextSpan>Dev Chat</TextSpan>

        </HeaderContainer>
   
   

    
    )
}