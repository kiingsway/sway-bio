import React from 'react';
import { Modal, Form, Select, Input } from 'antd';
import styles from './ProfileEditModal.module.scss';
import { LuUser, LuLayout } from "react-icons/lu";
import { IAppConfig } from '@/pages';
import { BiCommentDetail } from "react-icons/bi";

interface Props {
  open: boolean;
  onClose(): void;
  appState: [IAppConfig, React.Dispatch<React.SetStateAction<IAppConfig>>];
}

export default function ProfileEditModal({ appState, onClose, open }: Props): JSX.Element {

  const [form] = Form.useForm();
  const [appConfig, setAppConfig] = appState;

  React.useEffect(() => {
    if (open) form.setFieldsValue(appConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleSubmitForm(): void {
    const values = form.getFieldsValue();
    setAppConfig(values as IAppConfig);
    onClose();
  }

  return (
    <Modal title='Edit profile' open={open} onCancel={onClose} onOk={() => form.submit()}>
      <div className={styles.Main}>

        <Form
          form={form}
          layout="vertical"
          initialValues={appConfig}
          rootClassName={styles.Main_Form}
          onFinish={handleSubmitForm}
        >

          <Form.Item label={<Label icon={<LuUser />} text='Name' />} name="name" rules={[{ required: true, message: 'Required field' }]}>
            <Input />
          </Form.Item>

          <Form.Item label={<Label icon={<BiCommentDetail />} text='Bio' />} name="bio" rules={[{ required: true, message: 'Required field' }]}>
            <Input />
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
)