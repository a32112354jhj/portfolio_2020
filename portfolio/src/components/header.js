import React,{useState} from 'react';
import {HeaderMenu} from '../style/layout_sty';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <div>
                <HeaderMenu>
                    <ul>
                        <li>
                            <Link to="/Page01">1</Link>
                        </li>

                        <li>
                            <Link to="/Page02">2</Link>
                        </li>

                    </ul>
                </HeaderMenu>
            </div>
        </>
    );
}

export default Header;