interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto', 
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Logo Termodinâmica" 
        className={`${sizeClasses[size]} opacity-90 hover:opacity-100 transition-opacity`}
      />
    </div>
  );
} 