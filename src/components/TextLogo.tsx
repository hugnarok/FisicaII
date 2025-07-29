interface TextLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function TextLogo({ size = 'md', className = '' }: TextLogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl', 
    xl: 'text-6xl'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="bg-gradient-thermal bg-clip-text text-transparent">
        🌡️ Física II
      </span>
    </div>
  );
} 