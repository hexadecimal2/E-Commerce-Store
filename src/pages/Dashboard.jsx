import React from 'react';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
        <Sidebar />
        <ProductList />
        <Sidebag />
        </>
    );
};

export default Dashboard;