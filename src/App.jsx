import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home-page/HomePage';
import DescriptionProjectPage from './pages/description-project-page/DescriptionProjectPage';
import ScrollUp from './components/scroll-up/ScrollUp';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';


import React from 'react'

export default function App() {
    return (
        <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projet/:projetId" element={<DescriptionProjectPage />} />                
                </Routes>
                <Footer />
                <ScrollUp />
        </Router>
    );
};