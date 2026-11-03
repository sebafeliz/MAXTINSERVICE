import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withContainer?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  withContainer,
}) => {
  const [imgError, setImgError] = useState(false);

  // Height mappings matching different contexts
  const sizeClasses = {
    xs: 'h-6 sm:h-7',
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  }[size];

  // For dark backgrounds (such as footer or dark presentation slide),
  // wrapping in a crisp white rounded container guarantees full contrast and brand integrity.
  const isDarkBg = variant === 'dark' || variant === 'white';
  const shouldWrap = withContainer ?? isDarkBg;

  // Primary local asset (trimmed to remove whitespace margins), fallback to direct hosted image
  const primarySrc = '/maxtin-logo-trimmed.png';
  const fallbackSrc = 'https://i.ibb.co/JWsLFY8t/Imagen-1.jpg';

  const logoImage = (
    <img
      src={imgError ? fallbackSrc : primarySrc}
      onError={() => {
        if (!imgError) setImgError(true);
      }}
      alt="MAXTIN SERVICE - Soluciones Mineras e Industriales"
      className={`${sizeClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
      loading="eager"
    />
  );

  if (shouldWrap) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white p-1.5 rounded-lg shadow-xs border border-slate-700/30 select-none ${className}`}
      >
        {logoImage}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {logoImage}
    </div>
  );
};
