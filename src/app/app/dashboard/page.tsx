import Button from "@/components/Button/Button";
import RecentTransactions from "./RecentTransactions";

const DashboardPage = () => {
  return (
      <div className="grid grid-cols-12 divide-x">
        <div className="col-span-12 md:col-span-8 px-5">
          <h2 className="text-lg font-bold mb-4">Resumen</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 bg-white p-4 rounded-lg border border-neutral-300">
              <p className="text-neutral-500">Ventas</p>
              <h3 className="text-xl font-bold">$ 0.00</h3>
            </div>
            <div className="col-span-6 bg-white p-4 rounded-lg border border-neutral-300">
              <p className="text-neutral-500">Ganancias</p>
              <h3 className="text-xl font-bold">$ 0.00</h3>
            </div>
          </div>

          <RecentTransactions />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="px-5">
            <h2 className="text-lg font-bold mb-4">Actividad</h2>
            <div className="border p-4 rounded-lg">
              <p className="bg-purple-100 text-purple-700 inline-flex px-1 me-1 rounded">@username</p>
              Te mencionó en un comentario
              <blockquote className="font-mono text-neutral-500 bg-neutral-50 p-2 text-sm mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod.
              </blockquote>
              <Button variant="secondary" size="sm" className="w-fit">Ver documento</Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DashboardPage;