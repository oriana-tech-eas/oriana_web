'use client'

import { useAuth } from "@/hooks/useAuth";
import SideNav from "./SideNav";
import Loading from "./Loading";
import Button from "@/components/Button/Button";
import { LifebuoyIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { ContactsProvider } from "./_context/ContactsContext";

export default function AppLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  const { user } = useAuth({ middleware: 'auth' });

  if (!user) {
    return <Loading />;
  }

  return (
    <ContactsProvider>
      <ToastProvider>
        <main className="flex flex-col md:flex-row">
          <SideNav />
          <section className="w-full bg-white dark:bg-neutral-950">
            <div className="bg-white dark:bg-neutral-950 z-40 border-b border:neutral-400 dark:border-neutral-700 px-6 py-3 flex gap-2 items-end justify-end sticky top-0">
              <ThemeSwitch />
              <Button href="/help" variant='secondary' size="sm" className='w-fit gap-1'>
                <ChatBubbleBottomCenterIcon className='size-5 text-neutral-500'/>
                Sugerencias
              </Button>
              <Button href="/help" variant='ghost-link' size="sm" className='w-fit gap-1'>
                Ayuda
                <LifebuoyIcon className='size-5'/>
              </Button>
            </div>
            <div className="px-6 py-8">
              {children}
            </div>
          </section>
          {modal}
        </main>
      </ToastProvider>
    </ContactsProvider>
  );
}