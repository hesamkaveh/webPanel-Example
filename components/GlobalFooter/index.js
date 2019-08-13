import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import styled from "styled-components";
export const Copyright = styled.div`
  font-family: PingFangSC;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  margin:0 auto;
`
const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <div className={clsString}>
        <div className={styles.links}>
          <a href='http://google.com'>About</a>
          <a href='http://google.com'>Contact</a>
          <a href='http://google.com'>Privacy</a>
        </div>
       <Copyright className={styles.copyright}> Copyright © 2019 Develop & Conquer Inc.</Copyright>
    </div>
  );
};

export default GlobalFooter;
