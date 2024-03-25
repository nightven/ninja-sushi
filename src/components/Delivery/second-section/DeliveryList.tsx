import React from 'react';
import DeliveryBlocks from './DeliveryBlocks';

interface DeliveryListProps {}

export default function DeliveryList({}: DeliveryListProps) {
  const blocks = [
    {
      title: 'Як зробити замовлення?',
      text: 'Оберіть найзручніший для вас засіб',
      array: [
        { text: 'На сайті', icon: '/icons/site.svg' },
        { text: 'В мобільному застосунку', icon: '/icons/mobile.svg' },
        { text: 'По телефону', icon: '/icons/phone.svg' },
      ],
    },
    {
      title: 'Оплата',
      text: 'Переконайтеся, що вартість вашого замовлення дорівнює або перевищує 400 гривень',
      array: [
        { text: "Готівкою кур'єру", icon: '/icons/camera.svg' },
        { text: 'Оплата карткою', icon: '/icons/card.svg' },
        { text: 'Криптовалютою', icon: '/icons/crypto.svg' },
      ],
    },
    {
      title: 'Як отримати замовлення?',
      text: 'Середній час доставки становить 90 хвилин',
      array: [
        { text: 'Доставка курьером', icon: '/icons/delivery.svg' },
        { text: 'Самовывоз', icon: '/icons/pickup.svg' },
        { text: 'Криптовалютою', icon: '/icons/crypto.svg' },
      ],
    },
    {
      title: 'Додаткові опції',
      text: 'Пропонуємо великий спектр послуг, щоб ви отримували ще більше задоволення замовляючи у нас їжу',
      array: [
        {
          text: 'Передзамовлення на вказаний час',
          icon: '/icons/camera.svg',
        },
        { text: 'Безлактозні страви', icon: '/icons/lactose.svg' },
        { text: 'Вегетаріанські роли', icon: '/icons/camera.svg' },
      ],
    },
  ];
  return (
    <ul className="flex flex-col justify-center items-center gap-6 desktop:gap-32">
      {blocks.map(block => (
        <DeliveryBlocks
          title={block.title}
          text={block.text}
          iconArray={block.array}
          key={block.title}
        />
      ))}
    </ul>
  );
}
