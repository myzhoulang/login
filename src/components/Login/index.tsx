import React from 'react';

import classnames from 'classnames';
import styles from './index.less';
import LoginForm from './Form';

import type { CSSProperties } from 'react';
import OtherLogin from '@/components/Login/OtherLogin';

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  return (
    <>
      <div className={classnames(['login-top', styles.loginTop])}>
        <div className={classnames(['login-header', styles.loginHeader])}>
          <span className={classnames(['login-logo', styles.loginLogo])}>
            <img
              src="http://www.sooui.com/template/sooui/iscwo/images/logo.svg"
              alt=""
            />
          </span>
          <span className={classnames(['login-title', styles.loginTitle])}>
            Ant Design
          </span>
        </div>
        <div className={classnames(['login-desc', styles.loginDesc])}>
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>
      </div>

      <div className={classnames(['login-main', styles.loginMain])}>
        <LoginForm />

        <OtherLogin />

        <div className={classnames(['login-footer', styles.loginFooter])}>
          <div>
            还没有账号？ <a href="#">去注册</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
