import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Button from '@/components/Button/Button'

interface CalendarHeaderProps {
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
  onToday: () => void
}

const CalendarHeader = ({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth, 
  onToday 
}: CalendarHeaderProps) => {
  const formattedMonth = format(currentDate, 'MMMM yyyy', { locale: es })
  
  return (
    <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg p-4 border dark:border-neutral-700">
      <h2 className="text-xl font-bold capitalize dark:text-neutral-50">
        {formattedMonth}
      </h2>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="secondary-booking" 
          size="sm"
          onClick={onToday}
        >
          Hoy
        </Button>
        
        <div className="flex border dark:border-neutral-700 rounded-lg overflow-hidden">
          <button
            className="p-2 hover:bg-amber-50 dark:hover:bg-neutral-800"
            onClick={onPrevMonth}
          >
            <ChevronLeftIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            className="p-2 hover:bg-amber-50 dark:hover:bg-neutral-800"
            onClick={onNextMonth}
          >
            <ChevronRightIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalendarHeader