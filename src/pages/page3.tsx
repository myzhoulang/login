import { useState } from 'react';
import { Typography, Image } from 'antd';
import Login from '@/components/Login';
import { ProFormRadio } from '@ant-design/pro-form';
import type { FormLayout } from 'antd/lib/form/Form';

// import styles from './index2.less';
import './index3.less';
import Form from './Form';
import OtherLogin from './OtherLogin';
import sideBarImage from '@/assets/svg/graphic5.svg';

const { Title, Paragraph } = Typography;
function Sider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        top: '50%',
        transform: 'translateY(-50%)',
        position: 'relative',
      }}
    >
      <Title
        level={2}
        style={{
          fontSize: 24,
          color: '#064E89',
          paddingRight: 30,
          marginBottom: 30,
          maxWidth: 378,
          display: 'inline-block',
        }}
      >
        Get more things done with Loggin platform.
      </Title>
      <Paragraph
        style={{
          fontSize: 18,
          color: '#064E89',
          paddingRight: 30,
          maxWidth: 378,
          display: 'inline-block',
        }}
      >
        Access to the most powerfull tool in the entire design and web industry.
      </Paragraph>
      <Image
        style={{ width: '100%', maxWidth: 378 }}
        src={sideBarImage}
        preview={false}
      />
    </div>
  );
}

export default function IndexPage() {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>('vertical');
  return (
    <div className={'page3 login'}>
      <Login
        siderContent={<Sider />}
        siderProps={{
          style: { backgroundColor: '#FFF' },
        }}
        style={{ height: '100%' }}
        title="Ant Design"
        contentProps={{
          style: { backgroundColor: '#064E89' },
        }}
        formProps={{
          layout: formLayoutType,
          labelCol: { flex: formLayoutType === 'horizontal' ? '80px' : '' },
          onFinish: (value) => {
            console.log(value);
            return Promise.resolve();
          },
        }}
        formLoginTopRender={() => {
          return <h2 className="text-color-white">Sign In</h2>;
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
