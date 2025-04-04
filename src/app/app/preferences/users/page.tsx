import Button from "@/components/Button/Button";
import EmptyState from "@/components/EmptyState/EmptyState";
import { PlusIcon } from "@heroicons/react/24/outline";

const Users = () => {
  return (
    <div>
      <EmptyState type="empty" title="No tienes usuarios" description="No hay usuarios registrados"/>
      <Button href="/preferences/users/new" variant="link" className="w-fit mt-5">
        <PlusIcon className="size-5"/>
        Nuevo usuario
      </Button>
    </div>
  );
}

export default Users;