import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
.logo{
    width:24px;
}
`;


const Logo = ({logoUrl}) => {
    return(
        <LogoWrapper>
            <img  className={`logo`} src={logoUrl} alt="EllaSwap" />
        </LogoWrapper>
    ) 
}

export default Logo;