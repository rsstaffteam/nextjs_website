import {useEffect, useRef, type ReactNode} from 'react';
import {gsap} from 'gsap';
import './GridMotion.css';

interface GridMotionProps {
  items?: Array<string | ReactNode>;
  gradientColor?: string;
}

const totalItems = 28;

const defaultItems = Array.from(
  {length: totalItems},
  (_, index) => `Detail ${index + 1}`,
);

export default function GridMotion({
  items = [],
  gradientColor = '#c98a7a',
}: GridMotionProps) {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mouseXRef = useRef(0);

  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    mouseXRef.current = window.innerWidth / 2;
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (event: MouseEvent): void => {
      mouseXRef.current = event.clientX;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 180;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount =
          ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
            maxMoveAmount / 2) *
          direction;

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="grid-motion" aria-hidden="true">
      <section
        className="grid-motion__stage"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 62%)`,
        }}
      >
        <div className="grid-motion__container">
          {Array.from({length: 4}, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid-motion__row"
              ref={(element) => {
                rowRefs.current[rowIndex] = element;
              }}
            >
              {Array.from({length: 7}, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div key={itemIndex} className="grid-motion__item">
                    <div className="grid-motion__item-inner">
                      {typeof content === 'string' &&
                      content.startsWith('http') ? (
                        <div
                          className="grid-motion__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="grid-motion__item-content">
                          {content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
