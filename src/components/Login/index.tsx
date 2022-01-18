import React from 'react';
import { message, Space, Button, Divider, Tag } from 'antd';
import ProForm, {
  ProFormText,
  ProFormCaptcha,
  ProFormCheckbox,
} from '@ant-design/pro-form';
import {
  UserOutlined,
  LockOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

import type { CSSProperties } from 'react';

type LoginProps = {};

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

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
        <ProForm
          submitter={{
            render() {
              return (
                <Button size="large" type="primary" block>
                  登陆
                </Button>
              );
            },
          }}
        >
          <ProFormText
            name="username"
            label="用户名"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />

          <ProFormText.Password
            name="password"
            label="密码"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />

          <ProFormCaptcha
            label="验证码"
            fieldProps={{
              size: 'large',
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={'请输入验证码'}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`;
              }
              return '获取验证码';
            }}
            name="captcha"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async () => {
              message.success('获取验证码成功！验证码为：1234');
            }}
          />

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </ProForm>
        <div className={classnames(['login-other', styles.loginOther])}>
          <Divider plain>Or Login With</Divider>

          <div>
            <Space size={24}>
              <Tag icon={<TwitterOutlined />} color="#55acee">
                Twitter
              </Tag>
              <Tag icon={<YoutubeOutlined />} color="#cd201f">
                Youtube
              </Tag>
              <Tag icon={<FacebookOutlined />} color="#3b5999">
                Facebook
              </Tag>
            </Space>
          </div>
        </div>
        <div className={classnames(['login-footer', styles.loginFooter])}>
          <p>
            还没有账号？ <a href="#">去注册</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
