import styled from 'styled-components'
import { FiExternalLink } from "react-icons/fi";

const Tool = styled.section`
    flex: 1;
    max-width: 475px;
    background-color: #fff;
    border-radius: 4px;
    border: 2px solid #0b6dd0;
    -webkit-box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 15%), 0 8px 16px -8px rgb(0 0 0 / 10%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    color: #32325d;
    padding: 20px 20px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5em;
    letter-spacing: 0px;
    font-variant-numeric: proportional-nums;
    margin-top: 30px;
`

const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleInnerWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const InThisVideo = styled.h3`
    margin: 0;
    font-size: 13px;
    font-weight: 100;
    font-family: 'Ubuntu-Italic';
`;

const TitleElement = styled.h2`
    margin: 0 0 15px 0;
    font-size: 20px;
`

const MoreInnerWrap = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 15px;
`

const MoreInnerInnerWrap = styled.a`
    display: flex;
    flex-direction: row-reverse;
    opacity: 0.7;
    pointer: cursor;
    align-items: center;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover {
        opacity: 1;
    }
`

const MoreTitle = styled.h5`
    margin: 0;
    text-decoration: none;
    font-weight: 100;
    font-size: 12px;
` 

const style= {
    color: '#333', 
    margin: '0 0 0 5px',
    padding: 0,
    height: '10px',
    width: '10px'
}

const ToolTip = ({ title, description, link, linkTitle }) => {
    return (
        <Tool>
            <TitleWrap>
                <TitleInnerWrap>
                    {/* <InThisVideo>Explore in this video:</InThisVideo> */}
                    <TitleElement>{ title }</TitleElement>
                </TitleInnerWrap>
                {link ? 
                <MoreInnerWrap>
                    <MoreInnerInnerWrap target={"_blank"} href={link}>
                        <FiExternalLink style={style} />
                        <MoreTitle>{linkTitle}</MoreTitle>
                    </MoreInnerInnerWrap>
                </MoreInnerWrap>
                : <div />}
                
            </TitleWrap>
            
            { description }
        </Tool>  
    )
}

export default ToolTip;