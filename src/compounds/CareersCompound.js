import React from 'react';
import styled from "styled-components"
import CareersHeader from '../components/Careers/CareersHeader'
import CareersHiring from '../components/Careers/CareersHiring'

function CareersCompound() {
    return (
        <Wrapper>
          <CareersHeader />
          <CareersHiring />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default CareersCompound;