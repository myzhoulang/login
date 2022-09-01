import React, { CSSProperties, ReactNode, PropsWithChildren } from 'react';
import classnames from 'classnames';
import { Layout, Button, Image } from 'antd';
import ProForm, { ProFormProps } from '@ant-design/pro-form';

import type { SiderProps, LayoutProps } from 'antd';

import styles from './index.less';

type WithFalse<T> = T | false;
export type LoginProps<T> = {
  /** 侧边展示辅助信息区域 */
  siderContent?: ReactNode;
  /** 侧边栏 props  */
  siderProps?: Omit<
    SiderProps,
    'breakpoint' | 'collapsedWidth' | 'trigger' | 'style'
  >;
  /** 侧边栏 CSS 样式 */
  siderStyle?: CSSProperties;
  /** 主内容区 CSS 样式 */
  contentStyle?: CSSProperties;
  /** 主内容区 CSS props */
  contentProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
  /** 表单位置 默认: 'left' */
  formAlign?: 'left' | 'right';
  /** 主容器 Props */
  layoutProps: Omit<LayoutProps, 'style'>;
  /** 主容器样式 */
  layoutStyle?: CSSProperties;
  /** logo */
  logo?: string | ReactNode;
  /** 表单标题 */
  title?: string | ReactNode;
  /** 表单副标题 */
  subTitle?: string | ReactNode;
  /** 表单 props */
  formProps?: ProFormProps<T>;
  /** 注册跳转地址 */
  registerUrl?: string;
  /** 其他动作，如：其他登录方式 */
  actions?: ReactNode | React.ReactNode[] | false;
  /** 表单头部自定义渲染， false 则没有头部信息 */
  formLoginTopRender?: WithFalse<() => ReactNode>;
  /**
   * 是否需要内部的表单元素
   * 当使用 ModalForm 去渲染表单时，
   * 会存在表单嵌套，去除内部表单，直接使用 ModalForm 表单。
   *
   * */
  requiredForm?: boolean;
};

const { Sider, Content } = Layout;

function Login<T = Record<string, any>>(
  props: PropsWithChildren<Partial<LoginProps<T>>>,
) {
  const {
    siderContent,
    siderProps,
    siderStyle,
    formAlign = 'left',
    contentProps,
    contentStyle,
    layoutStyle,
    layoutProps,
    logo = null,
    title,
    subTitle,
    children,
    formProps,
    registerUrl,
    actions = false,
    formLoginTopRender,
    requiredForm = true,
  } = props;

  const mergeFormProps = Object.assign(
    {
      submitter: {
        render() {
          return (
            <Button size="large" type="primary" block>
              登陆
            </Button>
          );
        },
      },
    },
    formProps,
  );

  const mergeSiderProps = Object.assign(
    { defaultCollapsed: true, width: '50%' },
    siderProps,
    { breakpoint: 'xs' as const, collapsedWidth: 0, trigger: null },
  );

  // 登录表单顶部
  const renderFormLoginTop = () => {
    if (formLoginTopRender === false) {
      return null;
    }

    if (typeof formLoginTopRender === 'function') {
      return formLoginTopRender();
    }

    return (
      <div className={classnames(['login-top', styles.loginTop])}>
        <div className={classnames(['login-header', styles.loginHeader])}>
          {logoNode ? (
            <span
              key={'logo'}
              className={classnames(['login-logo', styles.loginLogo])}
            >
              {logoNode}
            </span>
          ) : null}

          {title ? (
            <span
              key={'title'}
              className={classnames(['login-title', styles.loginTitle])}
            >
              {title}
            </span>
          ) : null}
        </div>

        {subTitle ? (
          <div className={classnames(['login-desc', styles.loginDesc])}>
            {subTitle}
          </div>
        ) : null}
      </div>
    );
  };

  let logoNode = logo;
  if (logo && typeof logo === 'string') {
    logoNode = <Image src={logo} width={44} />;
  }

  // 侧边栏
  const siderWrap = siderContent ? (
    <Sider key={'sider'} {...mergeSiderProps} style={siderStyle}>
      {siderContent}
    </Sider>
  ) : null;

  // 主内容区域
  const contentWrap = (
    <Content
      key={'content'}
      {...contentProps}
      className={classnames([
        'login-content',
        siderWrap ? '' : styles.loginContentSuspended,
        styles.content,
        contentProps?.className,
      ])}
      style={contentStyle}
    >
      <div className={classnames(['login-form-wrap', styles.loginFormWrap])}>
        {/* 登录表单顶部内容 */}
        {renderFormLoginTop()}

        {/** 表单内容区域 */}
        <div className={classnames(['login-main', styles.loginMain])}>
          <div className={classnames(['login-form', styles.loginForm])}>
            {requiredForm ? (
              <ProForm {...mergeFormProps}>{children}</ProForm>
            ) : (
              children
            )}
          </div>

          {actions ? actions : null}

          {registerUrl ? (
            <div className={classnames(['login-footer', styles.loginFooter])}>
              <div>
                还没有账号？ <a href={registerUrl}>去注册</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Content>
  );

  let content = [siderWrap, contentWrap];

  return (
    <Layout {...layoutProps} style={layoutStyle}>
      {formAlign === 'left' ? content.reverse() : content}
    </Layout>
  );
}

export default Login;
