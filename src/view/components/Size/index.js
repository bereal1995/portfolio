import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {appActions} from "../../../redux/ActionCreators";

function Size() {

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
      </Container>
  )
}

const Container = styled.div`

`;


export default Size;