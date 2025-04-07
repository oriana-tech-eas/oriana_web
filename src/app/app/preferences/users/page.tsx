import Button from "@/components/Button/Button";
import EmptyState from "@/components/EmptyState/EmptyState";
import { PlusIcon } from "@heroicons/react/24/outline";

const Users = () => {
  return (
    <EmptyState 
      type="empty"
      title="No tienes usuarios"
      description="No hay usuarios registrados"
      actionButton={
        <Button href="/app/preferences/users/new" variant="primary-market" className="w-fit mx-auto">
          <PlusIcon className="size-5 mr-2"/>
          Nuevo usuario
        </Button>
        
      }
    />
  );
}

export default Users;