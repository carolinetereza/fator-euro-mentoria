import React from 'react';

interface InfiniteScrollCarouselProps {
  images: string[];
}

export const InfiniteScrollCarousel = ({ images }: InfiniteScrollCarouselProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center py-8">
        {/* Scrolling images container */}
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Resultado ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
