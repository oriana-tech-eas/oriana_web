'use client';

import { NextPage } from 'next';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Avatar from '@/components/Avatar/Avatar';
import { PencilIcon } from '@heroicons/react/16/solid';
import Button from '@/components/Button/Button';

const ProfileEditPage: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
  });
  
  // File upload state
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  // Load user data
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        username: user.username || '',
        address: user.address || '',
      });
      setPreviewUrl(user.profile_picture || null);
    }
    
    setLoading(false);
  }, [user]);
  
  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle profile image upload
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (!file.type.match(/image\/(jpeg|jpg|png|gif)/i)) {
        setError('Please upload a valid image file (JPEG, PNG, or GIF).');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should not exceed 5MB.');
        return;
      }
      
      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);
      
      // Create form data to send to API
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('username', formData.username);
      formDataToSend.append('address', formData.address);
      
      if (profileImage) {
        formDataToSend.append('profileImage', profileImage);
      }
      
      // In a real app, send to your API
      // const response = await fetch('/api/user/profile', {
      //   method: 'PUT',
      //   body: formDataToSend,
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      
      // Redirect after successful save (optional)
      // setTimeout(() => {
      //   router.push('/profile');
      // }, 2000);
      
    } catch (error) {
      console.error('Failed to update profile:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };
  
  // Function to get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user?.name) return '??';
    return `${user.name.charAt(0)}`;
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-8 bg-neutral-200 rounded w-1/4 mb-6"></div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-neutral-200 rounded-full"></div>
              <div className="flex-1 space-y-4">
                <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                <div className="h-10 bg-neutral-200 rounded"></div>
                <div className="h-10 bg-neutral-200 rounded"></div>
                <div className="h-10 bg-neutral-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Editar Perfil</h1>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            Profile updated successfully!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6">
          {/* Profile Image Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">Foto de perfil</label>
            <div className="flex items-center space-x-6">
              <div className="relative">
                {previewUrl ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden border border-neutral-200">
                    <Image 
                      src={previewUrl} 
                      alt="Previsualización de la imagen" 
                      width={96} 
                      height={96} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <Avatar initials={user?.initials || ''} name={user?.name || ''} size="2xl" />
                )}
                
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm border border-neutral-200 hover:bg-neutral-50"
                  onClick={() => document.getElementById('profile-image-input')?.click()}
                >
                  <PencilIcon className="w-5 h-5 text-neutral-500" />
                </button>
              </div>
              
              <div>
                <input
                  id="profile-image-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
                  onClick={() => document.getElementById('profile-image-input')?.click()}
                >
                  Cambiar imagen
                </button>
                <p className="text-xs text-neutral-500 mt-1">
                  JPEG, PNG or GIF (max. 5MB)
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">Información Personal</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-1">
                    usuario
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                      @
                    </span>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full pl-8 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email <span className="text-neutral-500">(Solo lectura)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={user?.email || ''}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-md text-neutral-500"
                    readOnly
                  />
                </div>
              </div>
            </div>
            
            {/* Other Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">Información Adicional</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                    Dirección
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">
                    Role <span className="text-neutral-500">(Solo lectura)</span>
                  </label>
                  <div className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-md text-neutral-500">
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${getRoleBadgeColor(user?.role)}
                    `}>
                      {user?.role || 'User'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="mt-8 pt-6 border-t border-neutral-300 dark:border-neutral-700 flex justify-end space-x-4">
            <Button
              variant='secondary-market'
              href='/app/account'
            >
              Cancelar
            </Button>
            <Button
              variant='primary-market'
              type="submit"
              disabled={saving}
            >
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper function to get role badge color
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

export default ProfileEditPage;