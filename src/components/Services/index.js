import React from 'react'
import Icon1 from '../../images/debetone.png'
import Icon2 from '../../images/debetone2.png'
import Icon3 from '../../images/debetone3.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="debitcard">
        <ServicesH1>Debit Cards</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>SberCard</ServicesH2>
                <ServicesP>Our best card for every day. Special conditions
                when enrolling scholarships, salaries and pensions.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Youth SberCard</ServicesH2>
                <ServicesP>For those who are from 14 to 21 years old. Profitable bonuses in youth categories. Sberbank</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>SberCard Travel</ServicesH2>
                <ServicesP>A multi-currency card for travelers.
                Travel, get Sber Miles and spend them on trips.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
