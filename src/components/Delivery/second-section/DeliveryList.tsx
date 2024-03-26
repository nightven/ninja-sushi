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
        {
          text: 'По телефону',
          icon: '/icons/phone.svg',
          numbers: [
            '+38 (099) 0077-313',
            '+38 (096) 0077-313',
            '+38 (073) 0777-313',
          ],
        },
      ],
    },
    {
      title: 'Оплата',
      text: 'Переконайтеся, що вартість вашого замовлення дорівнює або перевищує 400 гривень',
      array: [
        {
          text: "Готівкою кур'єру",
          icon: '/icons/camera.svg',
          subtitle: 'У наших ніндзя завжди є решта',
        },
        {
          text: 'Оплата карткою',
          icon: '/icons/card.svg',
          subtitle: 'Оплата карткою',
        },
        {
          text: 'Криптовалютою',
          icon: '/icons/crypto.svg',
          subtitle: 'Оплачуйте ваші замовлення за допомогою криптовалюти',
        },
      ],
    },
    {
      title: 'Як отримати замовлення?',
      text: 'Середній час доставки становить 90 хвилин',
      array: [
        {
          text: 'Доставка курьером',
          icon: '/icons/delivery.svg',
          subtitle: "Наші кур'єри не змусять чекати",
        },
        {
          text: 'Самовывоз',
          icon: '/icons/pickup.svg',
          subtitle: 'Маємо 33 ресторани по всій Україні',
        },
        {
          text: 'Криптовалютою',
          icon: '/icons/crypto.svg',
          subtitle: 'Оплачуйте ваші замовлення за допомогою криптовалюти',
        },
      ],
    },
    {
      title: 'Додаткові опції',
      text: 'Пропонуємо великий спектр послуг, щоб ви отримували ще більше задоволення замовляючи у нас їжу',
      array: [
        {
          text: 'Передзамовлення на вказаний час',
          icon: '/icons/camera.svg',
          subtitle: 'Замов заздалегідь, щоб не забути',
        },
        {
          text: 'Безлактозні страви',
          icon: '/icons/lactose.svg',
          subtitle: 'Для тих хто не переносить лактозу',
        },
        {
          text: 'Вегетаріанські роли',
          icon: '/icons/camera.svg',
          subtitle: 'Дбаємо про вподобання кожного клієнта',
        },
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
