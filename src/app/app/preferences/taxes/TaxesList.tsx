'use client'

import { useGetTaxes } from "../../_domain/taxes/useTaxes";

const TaxesList = () => {
  const { taxes, taxesLoading, taxesError } = useGetTaxes();

  if (taxesLoading) return <p>Cargando...</p>;
  if (taxesError) return <p>Hubo un problema al cargar los impuestos.</p>;

  const taxData = taxes?.data ?? [];

  if (taxData.length === 0) return <p>No hay impuestos disponibles</p>;

  return (
    <ul className="border dark:border-neutral-700 rounded-lg">
      {taxData.map((tax: any) => (
        <li
          key={tax.id}
          className="border-b dark:border-neutral-700 last-of-type:border-b-0 py-3 px-2 dark:text-neutral-50"
        >
          {tax.name}
        </li>
      ))}
    </ul>
  );
};

export default TaxesList;