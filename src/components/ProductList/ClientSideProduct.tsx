'use client';
import React from 'react';
interface ClientProps {
  children: React.ReactNode;
}
const ClientSideProduct = ({ children }: ClientProps) => {
  return <div>{children}</div>;
};

export default ClientSideProduct;
