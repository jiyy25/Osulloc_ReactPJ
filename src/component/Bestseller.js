import React from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import ProductBox from './ProductBox'

function Bestseller(props) {
    return (
        <div className='BestSeller container mb-5 pb-5'>
            <BigTitle>베스트 셀러</BigTitle>
            <SmallTitle>오늘은 어떤 차를 마셔볼까요?</SmallTitle>
            <div className='bestProduct row '>
                <ProductBox datasrc={props.datasrc}></ProductBox>
            </div>
        </div>

    )
}

export default Bestseller
