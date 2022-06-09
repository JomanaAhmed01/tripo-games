import React from 'react';
import styled from "styled-components"
import CareersHeader from '../components/Careers/CareersHeader'
import CareersHiring from '../components/Careers/CareersHiring'
import CareersJobOpenings from '../components/Careers/CareersJobOpenings'
import CareersCV from '../components/Careers/CareersCV'
import CareersFooter from '../components/Careers/CareersFooter'

function CareersCompound() {
    return (
        <Wrapper>
          <CareersHeader />
          <CareersHiring />
          <CareersJobOpenings />
          <CareersCV />
          <CareersFooter />
        </Wrapper>
    );
}

export const Wrapper = styled.div`

`

export default CareersCompound;