import { useAuth } from "@/hooks/useAuth";
import { useFloating, useDismiss, useInteractions, offset, useClick, shift, autoUpdate } from "@floating-ui/react";
import { ArrowLeftEndOnRectangleIcon, BuildingOffice2Icon, ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { Tooltip } from "../Tooltip/Tooltip";

interface UserSubMenuProps {
  collapsed?: boolean;
}

const UserSubMenu = ({ collapsed = false }: UserSubMenuProps) => {
  const { user, logout } = useAuth({ middleware: 'guest' })
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      shift()
    ],
    whileElementsMounted: autoUpdate,
    placement: collapsed ? 'top-start' : 'right-end',
  })
  const dismiss = useDismiss(context);
  const click = useClick(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([
    dismiss,
    click
  ]);

  const userButtonContent = (
    <button
      type='button'
      ref={refs.setReference}
      {...getReferenceProps()}
      onClick={() => setIsOpen(!isOpen)}
      className={`rounded-lg
        ${collapsed ? 'size-14 mx-auto' : 'w-full bordered-component p-2 gap-2'} flex justify-between items-center`}
    >
      <div className={`${collapsed ? 'justify-center w-full' : 'gap-2 flex flex-nowrap '}`}>
        <Avatar initials="AF" size={collapsed ? 'md' : 'xs'} name="Anderson Fariña"/>        
        {!collapsed && (
          <p className='dark:text-neutral-100 text-nowrap text-ellipsis overflow-hidden'>
            {user?.name || 'Nombre'}
          </p>
        )}
      </div>
      {!collapsed && <ChevronRightIcon className="size-5 text-neutral-800 dark:text-neutral-100"/>}
    </button>
  );

  return (
    <>
      <div className={`flex flex-col ${collapsed ? 'px-2' : 'px-4'} mb-5`}>
        {collapsed ? (
          <Tooltip content={`${user?.name || 'Perfil'}`} placement="right">
            {userButtonContent}
          </Tooltip>
        ) : (
          userButtonContent
        )}
      </div>
      { 
        <div 
          ref={refs.setFloating} 
          className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-150 shadow-lg min-w-40 bg-white dark:bg-neutral-800 border dark:border-neutral-700 dark:text-neutral-50 rounded-lg`} 
          style={floatingStyles}
          {...getFloatingProps()}        
        >
          <ul>
            <li>
              <Link href="/app/account" className="px-4 py-2 flex w-full items-center border-b hover:bg-neutral-50 dark:hover:bg-neutral-700 dark:border-neutral-700">
                <UserCircleIcon className="size-5 me-2"/>
                Mi cuenta
              </Link>
              <Link href="/app/company" className="px-4 py-2 flex w-full items-center border-b hover:bg-neutral-50 dark:hover:bg-neutral-700 dark:border-neutral-700">
                <BuildingOffice2Icon className="size-5 me-2"/>
                Empresa
              </Link>
              <button type="button" onClick={logout} className="px-4 py-2 flex w-full items-center text-rose-500 hover:bg-neutral-50 dark:hover:bg-neutral-700 dark:border-neutral-700">
                <ArrowLeftEndOnRectangleIcon className="size-5 me-2"/>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

export default UserSubMenu;