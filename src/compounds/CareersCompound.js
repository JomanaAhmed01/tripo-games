import React from 'react';
import styled from "styled-components"
import CareersHeader from '../components/Careers/CareersHeader'
import CareersHiring from '../components/Careers/CareersHiring'
import CareersJobOpenings from '../components/Careers/CareersJobOpenings'

function CareersCompound() {
    return (
        <Wrapper>
          <CareersHeader />
          <CareersHiring />
          <CareersJobOpenings />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default CareersCompound;