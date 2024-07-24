import React from 'react';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-1">
                <Sidebar />
                </div>
                <div className="col-9">
                <ProductList />
                </div>
                <div className="col-2">
                <Sidebag />
                </div>
            </div>
        </div>
        
        
        
        </>
    );
};

export default Dashboard;