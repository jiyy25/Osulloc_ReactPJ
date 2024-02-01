import { BmoreBtn } from '../styled/Btns';
import { BigTitle, SmallTitle } from '../styled/Title';
import "@fontsource/noto-sans-kr/200.css"
import "@fontsource/noto-sans-kr/300.css"

const Mov = () => {

    return (
        <div className='videoZone mt-5 pt-5'>
            <BigTitle>오설록 프리미엄 말차 즐기는 법</BigTitle>
            <SmallTitle className='mb-5'>차와 함께하는 삶, 각자의 취향이 묻어있는레시피와 인터뷰를 만나보세요.</SmallTitle>
            <div class="video-foreground pc-view">
                <iframe title='osulloc' id="main-player" allow="autoplay" src="https://player.vimeo.com/video/886319527?background=1&amp;api=1" width="1280" height="720" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
            </div>
            <BmoreBtn>자세히보기</BmoreBtn>
        </div>


    )
};

export default Mov;
