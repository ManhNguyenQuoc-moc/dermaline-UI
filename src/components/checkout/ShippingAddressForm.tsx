'use client';

import React from 'react';
import { GForm, GFormItem, GInput, GTextArea, GCheckbox } from '@/@core/component/Antd';
import { EnvironmentOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@/@core/component/Antd/Icons';
import { FormInstance } from 'antd';

interface ShippingAddressFormProps {
  form: FormInstance;
}

export default function ShippingAddressForm({ form }: ShippingAddressFormProps) {
  return (
    <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-none sm:rounded-sm space-y-6 shadow-2xs select-none">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
        <EnvironmentOutlined className="text-xl text-brand-primary" />
        <h3 className="font-headline font-semibold text-xl text-slate-900">
          1. Delivery & Clinic Address
        </h3>
      </div>

      <GForm form={form} layout="vertical" className="space-y-4">
        {/* Recipient Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GFormItem
            name="fullName"
            label="Recipient / Doctor Full Name"
            rules={[{ required: true, message: 'Please enter recipient name' }]}
          >
            <GInput prefix={<UserOutlined className="text-slate-400 mr-1" />} placeholder="e.g. Dr. Alexander Vance" />
          </GFormItem>

          <GFormItem
            name="phone"
            label="Contact Phone Number"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <GInput prefix={<PhoneOutlined className="text-slate-400 mr-1" />} placeholder="e.g. +1 (555) 234-5678" />
          </GFormItem>
        </div>

        {/* Email Address */}
        <GFormItem
          name="email"
          label="Clinic Email (For Dispatch Order Tracking)"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <GInput prefix={<MailOutlined className="text-slate-400 mr-1" />} placeholder="e.g. clinic@dermaline-aesthetic.com" />
        </GFormItem>

        {/* Street Address */}
        <GFormItem
          name="addressLine1"
          label="Street Address / Building Name"
          rules={[{ required: true, message: 'Please enter street address' }]}
        >
          <GInput placeholder="e.g. 742 Evergreen Terrace, Suite 400" />
        </GFormItem>

        {/* City, State & Zip Code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GFormItem
            name="city"
            label="City"
            rules={[{ required: true, message: 'Please enter city' }]}
          >
            <GInput placeholder="e.g. Los Angeles" />
          </GFormItem>

          <GFormItem
            name="stateProvince"
            label="State / Province"
            rules={[{ required: true, message: 'Please enter state' }]}
          >
            <GInput placeholder="e.g. California" />
          </GFormItem>

          <GFormItem
            name="postalCode"
            label="Postal / Zip Code"
            rules={[{ required: true, message: 'Please enter zip code' }]}
          >
            <GInput placeholder="e.g. 90210" />
          </GFormItem>
        </div>

        {/* Country */}
        <GFormItem
          name="country"
          label="Country / Region"
          initialValue="United States"
          rules={[{ required: true, message: 'Please enter country' }]}
        >
          <GInput placeholder="e.g. United States, South Korea, Japan..." />
        </GFormItem>

        {/* Order Notes */}
        <GFormItem name="orderNotes" label="Special Delivery Instructions (Optional)">
          <GTextArea rows={3} placeholder="Provide any hospital gate access codes or delivery preferences..." />
        </GFormItem>

        {/* Save Address Checkbox */}
        <GFormItem name="saveForNextTime" valuePropName="checked" initialValue={true}>
          <GCheckbox className="font-body text-xs text-slate-600 font-medium">
            Save this clinic address for future orders
          </GCheckbox>
        </GFormItem>
      </GForm>
    </div>
  );
}
