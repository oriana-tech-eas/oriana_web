'use client'
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input"
import InputLabel from "../InputLabel/InputLabel"
import { XMarkIcon } from "@heroicons/react/24/outline";
import {useFloating, useFocus, useInteractions, offset} from '@floating-ui/react';

interface SearchableInputProps {
  label: string;
  value: string;
  handler: (e: any) => void;
  data: any;
  emptyAction?: {
    href: string;
    label: string;
    title: string;
  };
}

const SearchableInput = ({ label, value, handler, data, emptyAction }: SearchableInputProps) => {
  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement: 'bottom-end',
    middleware: [offset(5)]
  });

  const focus = useFocus(context);
 
  const {getReferenceProps, getFloatingProps} = useInteractions([
    focus,
  ]);

  const handleSelection = (data: any) => {
    setSelected(data)
    console.log(data);
  }

  return (
    <div className='flex flex-col gap-2 relative' ref={refs.setReference} {...getReferenceProps()}>
      <InputLabel>{label}</InputLabel>
      {
        selected ? (
          <div className='flex gap-4 items-center px-4 py-3 border border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
            <div className="size-8 bg-neutral-200 rounded-full"></div>
            <div className="flex-1">
              <p className="font-semibold dark:text-neutral-50">{selected.name}</p>
              <p className='text-sm text-neutral-400 dark:text-neutral-500'>{selected.email}</p>
            </div>
            <button className="text-neutral-400 dark:hover:text-neutral-50 hover:text-neutral-700 cursor-pointer duration-200" onClick={() => setSelected(null)}>
              <XMarkIcon className='size-5'/>
            </button>
          </div>
        )
      :
      <>
        <Input type='search' value={value} onChange={handler} />
        <div 
        role="list" 
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps()}
        className={
          `bg-white dark:bg-neutral-800 divide-y dark:divide-neutral-700 w-full min-h-40 max-h-60 duration-200 ease-in-out overflow-auto shadow-xl rounded-lg 
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }>
          {
            data?.map((data: any) => (
              <div 
                role="listitem"
                key={data.id}
                onClick={() => handleSelection(data)}
                className='flex gap-4 items-center p-4 cursor-pointer duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-900'
              >
                <div className="size-8 bg-neutral-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-neutral-800 dark:text-neutral-50">{data.name}</p>
                  <p className='text-sm text-neutral-400 dark:text-neutral-500'>{data.email}</p>
                </div>
              </div>
            ))
          }
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