import React from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import styles from './index.less';
import LoginForm from './Form';

import type { CSSProperties } from 'react';
import OtherLogin from '@/components/Login/OtherLogin';

type LoginProps = {};

const Login: React.FC<LoginProps> = (props) => {
  return (
    <Row align="middle">
      <Col span={12}>
        <div className={classnames(['login-sidebar', styles.sideBar])}></div>
      </Col>
      <Col span={12}>
        <div className={classnames(['login-main', styles.loginMain])}>
          <div className={classnames(['login-top', styles.loginTop])}>
            <div className={classnames(['login-header', styles.loginHeader])}>
              <span className={classnames(['login-logo', styles.loginLogo])}>
                <img
                  src="http://www.sooui.com/template/sooui/iscwo/images/logo.svg"
                  alt=""
                />
              </span>
              <span className={classnames(['login-title', styles.loginTitle])}>
                权限控制平台
              </span>
            </div>
            <div className={classnames(['login-desc', styles.loginDesc])}>
              集用户、权限、角色、系统于一体的通用权限控制平台
            </div>
          </div>

          <LoginForm />
          <OtherLogin />
          <div className={classnames(['login-footer', styles.loginFooter])}>
            <div>
              还没有账号？ <a href="#">去注册</a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
