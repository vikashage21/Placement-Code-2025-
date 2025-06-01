import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto shadow-lg overflow-hidden flex flex-col md:flex-row animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full md:w-1/3 h-64 md:h-auto">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* Content Skeleton */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <Skeleton height={30} width="60%" className="mb-2" />
          <Skeleton height={20} width="40%" className="mb-4" />
          
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} height={15} className="mb-2" />
          ))}

          <Skeleton count={3} height={14} className="mt-4" />
        </div>

        <div className="mt-6">
          <Skeleton width={120} height={40} borderRadius={8} />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
