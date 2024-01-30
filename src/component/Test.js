import React, { useEffect } from 'react';
// import { MoreBtn } from '../styled/Btns';
import 'bootstrap/dist/css/bootstrap.min.css'

const Mov = () => {


    return (
        <div class="video-foreground pc-view">
            <video controls="" autoplay="autoplay" muted="muted" loop="loop" playsinline="" poster="">
                <source src="/osulloc.mp4" type="video/mp4"></source>

            </video>
        </div>
    )
};

export default Mov;
