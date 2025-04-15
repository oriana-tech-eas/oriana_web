'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button/Button';
import { useToast } from '@/components/Toast/ToastProvider';

interface LogoUploaderProps {
  currentLogo?: string;
  onClose: () => void;
}

const LogoUploader = ({ currentLogo, onClose }: LogoUploaderProps) => {
  const { addToast } = useToast();
  const [previewImage, setPreviewImage] = useState<string | null>(currentLogo || null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/image\/(png|jpeg|jpg|svg\+xml)/i)) {
      addToast('Por favor, selecciona una imagen válida (PNG, JPG, SVG)', 'error');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      addToast('La imagen debe ser menor a 2MB', 'error');
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
    
    setSelectedFile(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      addToast('Por favor, selecciona una imagen', 'error');
      return;
    }

    setIsUploading(true);

    try {
      // In a real implementation, this would be an API call to upload the logo
      // For now, we'll simulate a successful upload
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addToast('Logo actualizado correctamente', 'success');
      onClose();
    } catch (error) {
      console.error('Error uploading logo:', error);
      addToast('Error al subir el logo. Intenta nuevamente.', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-lg w-full mx-4">
        <div className="flex justify-between items-center border-b dark:border-neutral-700 p-4">
          <h2 className="text-lg font-semibold dark:text-neutral-50">Logo de empresa</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div 
            className="border-2 border-dashed dark:border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            onClick={triggerFileInput}
          >
            {previewImage ? (
              <div className="flex flex-col items-center">
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg mb-4">
                  <Image
                    src={previewImage}
                    alt="Logo preview"
                    width={200}
                    height={100}
                    className="max-h-28 object-contain"
                  />
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  Haz clic para cambiar la imagen
                </p>
              </div>
            ) : (
              <div className="text-center">
                <ArrowUpTrayIcon className="h-10 w-10 text-neutral-400 mx-auto mb-3" />
                <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                  Arrastra y suelta tu logo aquí
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                  o haz clic para seleccionar un archivo
                </p>
                <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-3">
                  PNG, JPG o SVG (max. 2MB)
                </p>
              </div>
            )}
            
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/png, image/jpeg, image/jpg, image/svg+xml"
              onChange={handleFileSelect}
            />
          </div>
          
          <div className="flex justify-between mt-6">
            <Button
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </Button>
            
            <Button
              variant="primary-market"
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? 'Subiendo...' : 'Guardar logo'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoUploader;