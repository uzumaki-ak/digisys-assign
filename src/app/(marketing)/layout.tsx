import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
           
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            
        </>
    );
};

export default MarketingLayout
