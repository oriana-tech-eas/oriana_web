import Button from "@/components/Button/Button"
import { CheckIcon } from "@heroicons/react/24/outline"

interface PricingCardProps {
  title: string
  description: string
  price: string
  recommended: boolean
  features: string[]
  buttonText: string
  buttonVariant: 'primary' | 'secondary' | 'danger' | 'link' | 'ghost-link' | 'neutral' | 'neutral-outline' | 'white-outline'
}

const PricingCard = ({
  title, description, price, features, buttonText, buttonVariant, recommended
}: PricingCardProps) => {
  return (
    <div className={`col-span-12 md:col-span-4 border rounded-xl p-5 overflow-hidden relative ${recommended ? 'border-rose-500' : 'border-neutral-300'}`}>
      {
        recommended && (
          <div className="bg-rose-500 text-white text-center px-2 py-1 rounded-bl-md mb-5 absolute top-0 right-0">
            <p className="text-xs">Recomendado</p>
          </div>
        )
      }
      <div className="mb-5 text-center mt-5">
        <p className="uppercase mb-4">
          {title}
        </p>
        <h5 className="text-4xl font-bold">{price} Gs.</h5>
        <p className="text-neutral-500 text-sm">Mensuales</p>
      </div>
      
      <ul className="space-y-1 border-b pb-5 mb-5">
        {
          features.map((feature, index) => (
            <li key={index} className="flex gap-1">
              <CheckIcon className="size-5 text-rose-500" />
              <p>{feature}</p>
            </li>
          ))
        }
      </ul>
      <div className="bottom-0">
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
        <p className="text-sm text-neutral-500 text-center mt-2">
          {description}
        </p>
      </div>
    </div>  
  )
}

export default PricingCard