import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Toast } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Toast
    className={args.className}
    size={args.size}
    variant={args.variant}
    open={args.open}
  >
    {args.children}
  </Toast>
);

export const ToastStory = Template.bind({});
ToastStory.storyName = 'Toast';
ToastStory.args = {
  className: '',
  variant: 'contained',
  type: 'success',
  size: 'medium',
  open: false,
};

export const ToastVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Toast</h1>
      <h2 className="text-xl mt-6 ">contained Toast</h2>
      <div className="flex items-end gap-4">
        <Toast variant="contained" type="success" size="small" open={true}>
          성공했습니다.
        </Toast>
        <Toast variant="contained" type="error" size="small" open={true}>
          실패했습니다.
        </Toast>
        <Toast variant="contained" type="info" size="small" open={true}>
          알립니다.
        </Toast>
        <Toast variant="contained" type="warning" size="small" open={true}>
          위험합니다.
        </Toast>
      </div>
      <h2 className="text-xl mt-6 ">outlined Toast</h2>
      <div className="flex items-end gap-4">
        <Toast variant="outlined" type="success" size="small" open={true}>
          성공했습니다.
        </Toast>
        <Toast variant="outlined" type="error" size="small" open={true}>
          실패했습니다.
        </Toast>
        <Toast variant="outlined" type="info" size="small" open={true}>
          알립니다.
        </Toast>
        <Toast variant="outlined" type="warning" size="small" open={true}>
          위험합니다.
        </Toast>
      </div>
    </div>
  );
};
ToastVariationsStory.storyName = 'Toast Variations';