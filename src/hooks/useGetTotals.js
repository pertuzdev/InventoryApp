import React, {useEffect, useState} from 'react';

import {calculateTotalInArr} from '../helpers/calculateTotalInArr';
import {roundNumber} from '../helpers/math';

export default function useGetTotalQuantity({items = []}) {
  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (items.length > 0) {
      setTotalQty(
        calculateTotalInArr({list: items, mapCallback: item => item.quantity}),
      );
      setTotalCost(
        roundNumber(
          calculateTotalInArr({
            list: items,
            mapCallback: item => item.cost * item.quantity,
          }),
        ),
      );
    } else {
      setTotalQty(0);
      setTotalCost(0);
    }
  }, [items]);

  return {totalQty, totalCost};
}
