'use client'

import React, { useState } from 'react';
import { useFloating, arrow, shift, offset, autoUpdate, Placement } from '@floating-ui/react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
}

export const Tooltip = ({ children, content, placement = 'top' }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  const showTooltip = () => setIsOpen(true);
  const hideTooltip = () => setIsOpen(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <div ref={refs.setReference}>
        {children}
      </div>
      
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            zIndex: 50,
          }}
          className="bg-neutral-800 text-white text-sm rounded-md py-1 px-2 z-50 max-w-xs"
        >
          {content}
          <div
            ref={arrowRef}
            className="absolute bg-neutral-800 w-2 h-2 rotate-45"
            style={{
              left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
              top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
              [staticSide as string]: '-4px',
            }}
          />
        </div>
      )}
    </div>
  );
};