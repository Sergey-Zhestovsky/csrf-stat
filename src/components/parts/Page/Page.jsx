import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Page = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
