import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  isPopular?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}