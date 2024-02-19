import React from 'react'

function ProductBox({ datasrc, cardnum, bestPage }) {
    return (
        <>
            {
                //cardnum으로 slice할 숫자를 받아올 수 있다.
                //특정 페이지에서는 특정스타일을 추가함
                datasrc.slice(0, cardnum).map((v, i) => {
                    return (
                        <div className='productBox col-lg-3 col-6 mb-4 mb-sm-5 text-center position-relative'>
                            <span className={`position-absolute top-0
                            ${bestPage === "Shop" ? 'bestnum' :
                                    (bestPage === "Seller" ? 'bestnum2' : 'd-none')}
                            `}>{i + 1}</span>
                            <a href="">
                                <img src={v.imgsrc} alt={v.alt} />
                            </a>
                            <div className='textBox mt-2'>
                                <div className='title'><a href="">{v.title}</a></div>
                                <div className='desc'>{v.text}</div>
                                <div className='price'>{v.price}원</div>
                            </div>
                        </div >
                    )
                })
            }
        </>

    )
}

export default ProductBox
