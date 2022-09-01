import { Button, Form } from 'antd';
import { ModalForm } from '@ant-design/pro-form';

import Login from '@/components/Login';
import LoginForm from './Form';

type PageProps = {};
const Page5 = (props: PageProps) => {
  return (
    <ModalForm
      className="modal-login"
      title="Login"
      trigger={<Button>Login</Button>}
      width={600}
      submitter={false}
    >
      <Login
        title="Ant Design"
        subTitle="Ant Design 是西湖区最具影响力的 Web 设计规范"
        formAlign="center"
        requiredForm={false}
      >
        <LoginForm />

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            登 陆
          </Button>
        </Form.Item>
      </Login>
    </ModalForm>
  );
};

export default Page5;
