import React, { useEffect, useState } from 'react'
import { DashPosts, DashProfile, DashSidebar, DashUsers } from '../components'
import { useLocation } from 'react-router-dom';

const Dashboard = () => {

    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className='md:w-56'>
                {/* Sidebar */}
                <DashSidebar />
            </div>
            {/* profile... */}
            {tab === 'profile' && <DashProfile />}
            {/* posts... */}
            {tab === 'posts' && <DashPosts />}
            {/* users */}
            {tab === 'users' && <DashUsers />}
        </div>
    )
}

export default Dashboard
