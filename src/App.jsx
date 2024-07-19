import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home-page/HomePage';
import ScrollUp from './components/scroll-up/ScrollUp';


import React from 'react'

export default function App() {
    return (
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Footer />
                <ScrollUp />
        </Router>
    );
};
