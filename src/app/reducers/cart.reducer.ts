import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';

export const initialState = 0;

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state) => state + 1),
  on(removeFromCart, (state) => state - 1)
);

export function cartReducer(state: number | undefined, action: Action) {
  return _cartReducer(state, action);
}
