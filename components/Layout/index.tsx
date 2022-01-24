
import React, { ReactChildren, ReactChild } from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer';

interface LayoutProps {
        children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
        return (
                <>
                        <Header></Header>
                        {children}
                        <Footer></Footer>
                </>

        )
}

export default Layout
