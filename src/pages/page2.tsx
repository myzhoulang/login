import { useState } from 'react';
import Login from '@/components/Login';
import { ProFormRadio } from '@ant-design/pro-form';
import type { FormLayout } from 'antd/lib/form/Form';

// import styles from './index2.less';
import './index2.less';
import Form from './Form';
import OtherLogin from './OtherLogin';

export default function IndexPage() {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>('vertical');
  return (
    <div className={'login page2'}>
      <Login
        formAlign="left"
        siderContent={<div className={'siderBar'}></div>}
        siderProps={{
          style: { backgroundColor: '#ffe0eb' },
        }}
        style={{ height: '100%' }}
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
