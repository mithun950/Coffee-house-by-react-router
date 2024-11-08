import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

// alart er tostify import

import toast, { Toaster } from 'react-hot-toast';

const MainLayOuts = () => {
    return (
        <div>
            {/* alart dekhanor jonno  */}
             <Toaster />
            {/* navbar */}
             <Navbar></Navbar>
            {/* dynamic section */}

            <div className='min-h-[calc(100vh-232px)] w-10/12 mx-auto'>
            <Outlet></Outlet>
            </div>
              
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;