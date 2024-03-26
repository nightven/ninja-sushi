import clsx from 'clsx';
import React from 'react';

interface DeliveryContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function DeliveryContainer({
  children,
  className,
}: DeliveryContainerProps) {
  return (
    <section className={clsx('desktop:px-[266px]', className)}>
      {children}
    </section>
  );
}
