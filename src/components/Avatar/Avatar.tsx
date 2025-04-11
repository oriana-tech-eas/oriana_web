import { AVAILABLE_SIZES, FONT_SIZE } from "./AvatarSizes";

interface AvatarProps {
  initials: string;
  url?: string;
  name: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  className?: string;
}

const Avatar = ({ initials, url, name, size, className }: AvatarProps ) => {
  return (
    <div className={
      `rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 ${AVAILABLE_SIZES[size]} ${className || ''}`
    }>
      {
        url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt={name} className='rounded-full w-full h-full object-fill' />
        ) : <span className={
          `font-semibold text-neutral-800 dark:text-neutral-300 ${FONT_SIZE[size]}`
        }>{initials}</span>
      }
    </div>
  );
}

export default Avatar;