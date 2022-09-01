import { useState } from 'react';
import { Image } from 'antd';
import Login from '@/components/Login';
import { ProFormRadio } from '@ant-design/pro-form';
import type { FormLayout } from 'antd/lib/form/Form';

// import styles from './index2.less';
import './index4.less';
import Form from './Form';
import OtherLogin from './OtherLogin';
import Graphic from '@/assets/svg/graphic3.svg';

const Sider = () => {
  return (
    <div className="sider">
      <Image src={Graphic} preview={false} style={{ maxWidth: 378 }} />
    </div>
  );
};
export default function IndexPage() {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>('vertical');
  return (
    <div className={'page4 login'}>
      <Login
        formAlign="right"
        siderContent={<Sider />}
        siderProps={{
          width: '40%',
        }}
        logo="http://www.sooui.com/template/sooui/iscwo/images/logo.svg"
        title="Ant Design"
        subTitle="Ant Design 是西湖区最具影响力的 Web 设计规范"
        formLoginTopRender={() => {
          return <h2>自定义表单头部-登录表单</h2>;
        }}
        formProps={{
          layout: formLayoutType,
          labelCol: { flex: formLayoutType === 'horizontal' ? '80px' : '' },
          onFinish: (value) => {
            console.log(value);
            return Promise.resolve();
          },
        }}
      >
        <ProFormRadio.Group
          label="标签布局"
          radioType="button"
          fieldProps={{
            value: formLayoutType,
            onChange: (e) => setFormLayoutType(e.target.value),
          }}
          colProps={{
            span: 20,
          }}
          options={['horizontal', 'vertical']}
        />
        <Form />
      </Login>
    </div>
  );
}
