import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './page.module.scss';

const Page = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
