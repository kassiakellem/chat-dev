
import { HeaderContainer, TextSpan } from "./HeaderContainer"
import logo from "../../assets/logo2.png"

export const Header = () => {
    return (
        <HeaderContainer>

            <img src={logo} alt="logo"/>
            <TextSpan>Dev Chat</TextSpan>

        </HeaderContainer>
   
   

    
    )
}