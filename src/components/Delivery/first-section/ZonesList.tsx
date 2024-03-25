import React from 'react';
import Zones, { Zone } from './ZonesItem';

interface ZonesListProps {}

export default function ZonesList({}: ZonesListProps) {
  const zones = [
    { text: 'Безкоштовна доставка', color: Zone.Green },
    { text: 'Платна доставка', color: Zone.Yellow },
    { text: 'Доставку не робимо', color: Zone.Red },
  ];
  return (
    <ul className="flex flex-col desktop:flex-row desktop:gap-6 gap-2">
      {zones.map(zone => (
        <Zones title={zone.text} color={zone.color} key={zone.text} />
      ))}
    </ul>
  );
}
