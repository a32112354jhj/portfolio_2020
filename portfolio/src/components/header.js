import React,{useState} from 'react';
import {HeaderMenu} from '../style/layout_sty';
import {Link,NavLink} from 'react-router-dom';

function Header(){
    return(
        <>
            <div>
                <HeaderMenu>
                    <ul>
                        <li>
                            <NavLink  exact={true} activeClassName="act" to="/Page01">1</NavLink >
                        </li>
                        <li>
                            <NavLink  activeClassName="act" to="/Page02">2</NavLink >
                        </li>
                        <li>
                            <NavLink  activeClassName="act" to="/Page03">3</NavLink >
                        </li>
                    </ul>
                </HeaderMenu>
            </div>
        </>
    );
}

export default Header;