import { Content, Wrapper , Switcher, ContentContainer} from "./header-style";

 

export default function Header ({toggleDarkMode, darkMode}){
    return (
        <Wrapper darkMode={darkMode}>
            <ContentContainer>
                <Content darkMode={darkMode}>
                    <h3>Where in the World?</h3>
                    <Switcher darkMode={darkMode}>
                        <i className="far fa-moon" onClick={
                            ()=>
                            toggleDarkMode(darkMode)
                            }
                            ></i>
                        <h4>Dark Mode</h4>
                    </Switcher>
                </Content>

            </ContentContainer>
        </Wrapper>
    )
}