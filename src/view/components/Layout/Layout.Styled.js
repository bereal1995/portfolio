import styled from 'styled-components';
import {pxToRem} from "../../../styled/Util.Styled";
import {breakPoint, media} from "../../../styled/Responsive.Styled";

export const PageContainer = styled.div`
    flex: 1;
    background-color: ${props => props.dark && '#151a1d'};
    min-height: calc(100vh - 160px);
`;

export const SectionContainer = styled.div`
  padding: 90px 0;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
    position:relative;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 15px;
    ${props => props.full && `
        max-width: 100%;    
    `};
    
    ${media.lessThan("lg")`
        max-width: ${pxToRem(breakPoint.MD)};   
    `};
    
    ${media.lessThan("md")`
        max-width: 100%;
    `};
   
`;

export const Full = styled.div`
    flex: 1;
`;


export const Overlay = styled.div`
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(0,0,0, ${props => (props.alpha || 0.6)});
`;