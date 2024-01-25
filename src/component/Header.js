import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.min.css'
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiUserHeartLine } from "react-icons/ri";


function Header() {
    return (
        <header className='fixed-top border-bottom'>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                {/* <div className='d-block d-lg-none center'></div> */}
                <button className='navBtn d-lg-none mx-2'>
                    <i></i>
                    <i></i>
                </button>
                <h1 className='logo mx-5'>
                    <img src="/img/logo/logo_white.png" alt="로고" />
                </h1>
                <div className='d-lg-flex '>
                    <ul className='navmn d-lg-flex d-none justify-content-between '>
                        <li><a href="">제품</a></li>
                        <li><a href="">보자기포장</a></li>
                        <li><a href="">다다일상</a></li>
                        <li><a href="">브랜드</a></li>
                        <li><a href="">이벤트</a></li>
                    </ul>
                    <ul className='icoBox d-flex'>
                        <li><a href=""><IoBagOutline size={25}/></a></li>
                        <li className='userIco'><a href=""><RiUserHeartLine size={25}/></a></li>
                        <li className='d-none d-lg-block'><a href=""><IoSearch size={25}/></a></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header
