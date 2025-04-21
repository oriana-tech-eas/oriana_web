import { ToastAction, ToastItem } from "@/app/app/_shared/@types/toast";

export const toastReducer = (state: ToastItem[], action: ToastAction): ToastItem[] => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.payload];
    case 'REMOVE_TOAST':
      return state.filter(toast => toast.id !== action.payload);
    default:
      return state;
  }
};