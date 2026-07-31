import React from 'react';

export interface SWTSkeletonProps {
  className?: string;
  count?: number;
}

export function SWTSkeleton({ className = 'h-12 w-full', count = 1 }: SWTSkeletonProps) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`bg-border-default/60 rounded-md ${className}`} />
      ))}
    </div>
  );
}

export default SWTSkeleton;
