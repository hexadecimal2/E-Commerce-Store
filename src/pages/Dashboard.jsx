import React from 'react';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
        <div className="container m">
        <Sidebar />
            <div className="row ms-3">
                
                <div className="col-9">
                <ProductList />
                </div>
                <div className="col-3 me-0">
                <Sidebag />
                </div>
            </div>
        </div>
        
        
        
        </>
    );
};

export default Dashboard;