import DeliveryContainer from '@/components/Delivery/DeliveryContainer';
import About from '@/components/Delivery/about-section/About';
import Condition from '@/components/Delivery/condition-section/Condition';
import ZonesList from '@/components/Delivery/first-section/ZonesList';
import DeliveryList from '@/components/Delivery/second-section/DeliveryList';
import Panel from '@/components/Panel/Panel';
import clsx from 'clsx';
import React from 'react';

interface DeliveryProps {}

export default function Delivery({}: DeliveryProps) {
  return (
    <main>
      <section className="container mt-4">
        <Panel>
          <p className="text-sm text-gray-400">Оформлення замовлення</p>
        </Panel>
      </section>
      <DeliveryContainer className="container">
        <h1 className="desktop:text-5xl text-3xl font-bold desktop:mb-8 mb-3">
          Доставка
        </h1>
        <Condition />
        <ZonesList />
      </DeliveryContainer>
      <section
        className={clsx(
          "desktop:bg-[url('/googledesk.png')] bg-[url('/googlemob.png')] bg-no-repeat desktop:h-[672px] h-[292px] bg-cover bg-center"
        )}
      />
      <DeliveryContainer className="container desktop:py-32 py-6">
        <DeliveryList />
      </DeliveryContainer>
      <section className="bg-white">
        <DeliveryContainer className="container desktop:block hidden py-32 bg-white">
          <About />
        </DeliveryContainer>
      </section>
    </main>
  );
}
