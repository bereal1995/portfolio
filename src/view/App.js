import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import ButtonToTop from "./components/Button/ButtonToTop";
import Footer from "./components/Footer";
import Size from "./components/Size";
import {appActions} from "../redux/ActionCreators";

const App = () => {

    const size = useWindowSize();

    function useWindowSize() {
        const isClient = typeof window === 'object';
        function getSize() {
            return {
                width: isClient ? window.innerWidth : undefined,
                height: isClient ? window.innerHeight : undefined
            };
        }
        const [windowSize, setWindowSize] = useState(getSize);
        useEffect(() => {
            if (!isClient) {
                return false;
            }

            function handleResize() {
                setWindowSize(getSize());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        });

        return windowSize;
    }

    useEffect(() => {
        appActions.updateState({
            windowSize: {
                width: size.width,
                height: size.height,
            }
        })
    },[size])
    
    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Routes/>
            <Footer/>
            <ButtonToTop/>
            <Size/>
        </Container>
    )
}

const Container = styled.div`
`;

export default App;