import { useState } from 'react';
import { ProFormRadio } from '@ant-design/pro-form';
import type { FormLayout } from 'antd/lib/form/Form';
import Login from '@/components/Login';
// import styles from './index.less';
import './index.less';
import Form from './Form';
import OtherLogin from './OtherLogin';

type FormData = {
  username: string;
  password: string;
  captcha: string;
};
export default function IndexPage() {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>('vertical');
  return (
    <div className={'login page'}>
      <Login<FormData>
        formAlign="right"
        layoutProps={{
          className: 'layout',
        }}
        logo="http://www.sooui.com/template/sooui/iscwo/images/logo.svg"
        title="Ant Design"
        subTitle="Ant Design 是西湖区最具影响力的 Web 设计规范"
        formProps={{
          layout: formLayoutType,
          labelCol: { flex: formLayoutType === 'horizontal' ? '80px' : '' },
          onFinish: (value) => {
            console.log(value);
            return Promise.resolve();
          },
        }}
        registerUrl="#"
        actions={<OtherLogin />}
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
