import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  phone: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,name, phone
}) => (
  <div className='space-y-2 p-2'>
    <h1>Hello {name},</h1>
    <h2>Phone: {phone}</h2>
    <p>{message}</p>
  </div>
);
