import DeliveryContainer from '@/components/Delivery/DeliveryContainer';
import About from '@/components/Delivery/about-section/About';
import Condition from '@/components/Delivery/condition-section/Condition';
import ZonesList from '@/components/Delivery/first-section/ZonesList';
import DeliveryList from '@/components/Delivery/second-section/DeliveryList';
import React from 'react';

interface DeliveryProps {}

export default function Delivery({}: DeliveryProps) {
  return (
    <main>
      <DeliveryContainer className="container">
        <h1 className="desktop:text-5xl text-3xl font-bold desktop:mb-8 mb-3">
          Доставка
        </h1>
        <Condition />
        <ZonesList />
      </DeliveryContainer>
      <section className="container">map</section>
      <DeliveryContainer className="container py-32">
        <DeliveryList />
      </DeliveryContainer>
      <DeliveryContainer className="desktop:block hidden py-32 bg-white">
        <About />
      </DeliveryContainer>
    </main>
  );
}
