import React, { Fragment, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App(props) {
    return (
        <div className='jyySwiper'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    props.datasrc.map((v, i) => {
                        return (
                            <SwiperSlide>
                                <div className='imgBox'>
                                    <div>
                                        <a href="none">
                                            <img src={v.imgsrc} alt="" />
                                        </a>
                                        <div className=''>
                                            <strong>
                                                {v.text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </strong>
                                            <p>
                                                {v.sm_text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })

                }
            </Swiper >
        </div >
    );
}
