'use client';

import Button from "@/components/Button/Button";
import RecentTransactions from "./RecentTransactions";
import { OnboardingProvider } from "../../_context/OnboardingContext";
import OnboardingContainer from "@/components/Onboarding/OnboardingContainer";
import { useAuth } from "@/hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <OnboardingProvider>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 px-5">
          {user && <OnboardingContainer user={user} />}

          <h2 className="text-lg font-bold mb-4">Resumen</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 bg-white dark:bg-neutral-900 p-4 rounded-lg bordered-component">
              <p className="text-neutral-500">Ventas</p>
              <h3 className="text-xl font-bold">$ 0.00</h3>
            </div>
            <div className="col-span-6 bg-white dark:bg-neutral-900 p-4 rounded-lg bordered-component">
              <p className="text-neutral-500">Ganancias</p>
              <h3 className="text-xl font-bold">$ 0.00</h3>
            </div>
          </div>

          <RecentTransactions />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="p-5 bordered-component rounded-lg bg-neutral-100 dark:bg-neutral-900">
            <h2 className="text-lg font-bold mb-4">Actividad</h2>
            <div className="bordered-component p-4 rounded-lg bg-white dark:bg-neutral-800 mb-4">
              <p className="bg-purple-100 dark:bg-purple-950 text-purple-700 inline-flex px-1 me-1 rounded">@username</p>
              Te mencionó en un comentario
              <blockquote className="font-mono text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-2 text-sm mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod.
              </blockquote>
              <Button variant="secondary" size="sm" className="w-fit">Ver documento</Button>
            </div>
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
}

export default DashboardPage;