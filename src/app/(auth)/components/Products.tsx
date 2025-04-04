import { products } from "@/app/(public)/_shared/constants";
import Image from "next/image";

export default function Products() {
  return (
    <div className="mt-12">
      <p className="text-center text-sm text-neutral-500 mb-4">
        Una cuenta, todas las herramientas
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <div key={`${product.name}-${index}`} className="flex flex-col items-center">
            <div className={`w-12 h-12 ${product.lightColor} rounded-lg flex items-center justify-center`}>
              <Image src={product.icon} alt={product.name} width={12} height={12} className="w-6 h-6" />
            </div>
            <span className="text-xs text-neutral-600 mt-2 font-medium">{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}