import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
} from './orderSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  



  return (
    <div>
      
    </div>
  );
}
