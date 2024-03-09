import React from 'react';
import { Modal, Form, Select, Input } from 'antd';
import styles from './ProfileEditModal.module.scss';
import { LuUser, LuLayout } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import { ProfileState } from '@/pages';
import { IUserProfile } from '@/interfaces';

interface Props {
  open: boolean;
  onClose(): void;
  profileState: ProfileState;
}

export default function ProfileEditModal({ profileState, onClose, open }: Props): JSX.Element {

  const [form] = Form.useForm();
  const [profile, setProfile] = profileState;

  React.useEffect(() => {
    if (open) form.setFieldsValue(profile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleSubmitForm(): void {
    const values = form.getFieldsValue();
    setProfile((prev: IUserProfile) => ({ ...prev, ...values as IUserProfile }));
    onClose();
  }

  return (
    <Modal title='Edit profile' open={open} onCancel={onClose} onOk={() => form.submit()}>
      <div className={styles.Main}>

        <Form
          form={form}
          layout="vertical"
          initialValues={profile}
          rootClassName={styles.Main_Form}
          onFinish={handleSubmitForm}
        >

          <Form.Item label={<Label icon={<LuUser />} text='Name' />} name="name" rules={[{ required: true, message: 'Required field' }]}>
            <Input />
          </Form.Item>

          <Form.Item label={<Label icon={<BiCommentDetail />} text='Bio' />} name="bio" rules={[{ required: true, message: 'Required field' }]}>
            <Input />
          </Form.Item>

          <Form.Item label={<Label icon={<CgDarkMode />} text='Theme' />} name="theme">
            <Select>
              <Select.Option value="device">Same as device</Select.Option>
              <Select.Option value="dark">Dark</Select.Option>
              <Select.Option value="light">Light</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={<Label icon={<LuLayout />} text='Layout' />} name="layout">
            <Select>
              <Select.Option value="horizontal">Horizontal</Select.Option>
              <Select.Option value="vertical">Vertical</Select.Option>
            </Select>
          </Form.Item>

        </Form>
      </div>

    </Modal>
  );
}

interface LabelProps {
  icon: JSX.Element;
  text: string;
}

const Label = ({ icon, text }: LabelProps) => (
  <div className={styles.Label}>
    {icon}
    <span>{text}</span>
  </div>
);