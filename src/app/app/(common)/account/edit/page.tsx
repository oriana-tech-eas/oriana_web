'use client';

import { NextPage } from 'next';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/Button/Button';
import ProfileImageUpdate from './ProfileImageUpdate';
import PersonalInformation from './PersonalInformation';
import ExtraInformation from './ExtraInformation';

const ProfileEditPage: NextPage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
  });
  
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
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
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
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
		<div className='container mx-auto px-4 py-8'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-2xl font-bold mb-6'>Editar Perfil</h1>

				{error && (
					<div className='mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg'>
						{error}
					</div>
				)}

				{success && (
					<div className='mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg'>
						Perfil actualizado con éxito
					</div>
				)}

				<form
					onSubmit={handleSubmit}
					className='bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6'>
          {user && (
            <ProfileImageUpdate
              user={user}
              previewUrl={previewUrl}
              handleImageChange={handleImageChange}
            />
          )}

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<PersonalInformation
							formData={formData}
							handleInputChange={handleInputChange}
							user={user || undefined}
						/>

						<ExtraInformation
							formData={formData}
							handleInputChange={handleInputChange}
							user={user || undefined}
						/>
					</div>

					{/* Form Actions */}
					<div className='mt-8 pt-6 border-t border-neutral-300 dark:border-neutral-700 flex justify-end space-x-4'>
						<Button variant='secondary' href='/app/account'>
							Cancelar
						</Button>
						<Button variant='primary' type='submit' disabled={saving}>
							{saving ? 'Guardando...' : 'Guardar Cambios'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfileEditPage;