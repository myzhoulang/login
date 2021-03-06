import React from 'react';
import { Space, Divider, Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

type OtherLoginProps = {};

const OtherLogin: React.FC<OtherLoginProps> = (props) => {
  return (
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
  );
};

export default OtherLogin;
