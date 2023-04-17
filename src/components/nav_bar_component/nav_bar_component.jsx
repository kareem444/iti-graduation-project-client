import React from 'react';
import { Link } from "react-router-dom";
import ProgressLineComponent from '../progress_line_component/progress_line.component';
import { useIsFetching } from 'react-query';

const NavBarComponent = () => {
    const isFetching = useIsFetching()
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </nav>
            {isFetching == true && <ProgressLineComponent />}
        </>
    );
}

export default NavBarComponent;
