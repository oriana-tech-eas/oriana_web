
import { User } from '@/app/app/_shared/@types/user';
import Avatar from '@/components/Avatar/Avatar';
import Button from '@/components/Button/Button';
import { formatDateTime } from '@/utils';

interface UserProfileProps {
  user?: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  if (!user) {
    return (
      <div className="bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6">
        <p className="text-neutral-500">User profile not available</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0">
          <Avatar initials='AF' name='Anderson Fariña' size='xl' className='mb-4' />
        </div>
        
        {/* User Information */}
        <div className="flex-grow">
          <div className="border-b border-neutral-300 dark:border-neutral-700 pb-4 mb-4">
            <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
              {user?.name}
            </h1>
            <p className="text-neutral-500 mt-1">@{user.username}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm font-bold text-neutral-500 mb-2">Información</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p>{user.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Dirección</p>
                  <p>
                    {user.address || 'Ninguna dirección registrada'}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-neutral-500 mb-2">Detalles</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-neutral-500">Rol</p>
                  <div className="flex items-center">
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${getRoleBadgeColor(user.role)}
                    `}>
                      {user.role || 'usuario'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Plan</p>
                  <p className="font-medium">
                    {user.plan?.name || 'Plan Profesional'}
                  </p>
                  {user.plan?.expiresAt && (
                    <p className="text-xs text-neutral-500 mt-1">
                      Expira el {formatDateTime(user.plan.expiresAt)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-neutral-300 dark:border-neutral-700 flex gap-2">
        <Button 
          variant="secondary-market"
          href='/app/account/edit'
          className='w-fit'
        >
          Editar perfil
        </Button>
        <Button 
          variant="secondary-market"
          href='/app/account/change-password'
          className='w-fit'
        >
          Cambiar contraseña
        </Button>
      </div>
    </div>
  );
};

const getRoleBadgeColor = (role?: string): string => {
  switch (role?.toLowerCase()) {
    case 'admin':
      return 'bg-purple-100 text-purple-800';
    case 'manager':
      return 'bg-blue-100 text-blue-800';
    case 'seller':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
};

export default UserProfile;