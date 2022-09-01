import Login from '@/components/Login';
import { message } from 'antd';
import {
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

type FormProps = {};

export default function Form(props: FormProps) {
  return (
    <>
      <ProFormText
        name="username"
        label={'Email Address'}
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={'prefixIcon'} />,
        }}
        placeholder="Email Address"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />

      <ProFormText.Password
        name="password"
        label={'Password'}
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        placeholder="Password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />

      <ProFormCaptcha
        label={'Captcha'}
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
    </>
  );
}
