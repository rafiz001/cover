import React from 'react';
import { Link } from 'react-router';

function Index(props) {
    const data = [["Lab Report","/labreport"], ["Assignment","/assignment"] ]
    
    return (
        <div className='flex flex-col mt-3'>
            <Link className=' p-7 text-center bg-base-300' to="/labreport" >
           Lab Report

</Link>
        </div>
    );
}

export default Index;