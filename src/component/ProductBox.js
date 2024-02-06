import React from 'react'

function ProductBox({ datasrc }) {
    return (
        <>
            {
                datasrc.map((v, i) => {
                    return (
                        <div className='productBox  col-lg-3 col-md-6'>
                            <a href="">
                                <img src={v.imgsrc} alt={v.alt} />
                            </a>
                            <div className='textBox'>
                                <div className='title'><a href="">{v.title}</a></div>
                                <div className='desc'>{v.desc}</div>
                                <div className='price'>{v.price}원</div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProductBox
