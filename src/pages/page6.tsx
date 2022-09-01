import { Typography } from 'antd';
import Login from '@/components/Login';

import Form from './Form';
import sideBarImage from '@/assets/images/img-34.png';
import type { FormData } from './Form';
import './index6.less';

const { Title, Text } = Typography;

export default function IndexPage() {
  return (
    <div className={'page6 login'}>
      <Login<FormData>
        siderContent={
          <div className="sider">
            <img src={sideBarImage} />
          </div>
        }
        siderStyle={{
          backgroundColor: '#FFF',
        }}
        siderProps={{ width: '50%' }}
        layoutProps={{
          className: 'layout',
        }}
        contentProps={{
          className: 'content',
        }}
        title={<Title style={{ color: '#fff' }}>Welcome!</Title>}
        subTitle={
          <Text style={{ fontSize: 18, color: '#fff' }}>
            Sign Into Your Account
          </Text>
        }
        formProps={{
          onFinish: (value) => {
            console.log(value);
            return Promise.resolve();
          },
        }}
      >
        <Form />
      </Login>
    </div>
  );
}
