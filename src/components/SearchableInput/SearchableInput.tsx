'use client'
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input"
import InputLabel from "../InputLabel/InputLabel"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {useFloating, useFocus, useInteractions, offset, useDismiss} from '@floating-ui/react';

interface SearchableInputProps {
  label: string;
  value?: string;
  handler?: (e: any) => void;
  data?: React.ReactNode;
  className?: string;
  selectedItem: any;
  emptyAction?: {
    href: string;
    label: string;
    title: string;
  };
}

const SearchableInput = ({ label, value, handler, data, emptyAction, selectedItem, className }: SearchableInputProps) => {
  const [open, setOpen] = useState(false);

  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement: 'bottom-end',
    middleware: [offset(5)]
  });

  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  
  const {getReferenceProps, getFloatingProps} = useInteractions([
    focus,
    dismiss
  ]);

  return (
    <div className={`${className} flex flex-col gap-2 relative`} ref={refs.setReference} {...getReferenceProps()}>
      <InputLabel>{label}</InputLabel>
      {
        selectedItem ? selectedItem
      :
      <>
        <Input 
          type={handler ? 'search' : 'select'}
          value={value}
          onChange={handler}
          icon={
            <ChevronDownIcon className="size-5 absolute top-10 right-2 dark:text-neutral-200" />
          }
        />
        <div 
          role="list" 
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className={
            `bg-white z-50 dark:bg-neutral-800 divide-y dark:divide-neutral-700 w-full min-h-40 max-h-60 duration-200 ease-in-out overflow-auto shadow-xl rounded-lg 
            ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
          }
        >
          {data}
          {
            emptyAction &&
            <div className='flex gap-2 items-center justify-between p-4'>
              <p className='text-neutral-400'>{emptyAction.title}</p>
                <Button href={emptyAction.href} variant='secondary' size='sm'>{emptyAction.label}</Button>
            </div>
          }
        </div>
      </>
      }
    </div>
  )
}

export default SearchableInput;