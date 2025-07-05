"use client"
import { NumberTicker } from "@/components/magicui/number-ticker";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3, // % of section visible to trigger
    triggerOnce: false, // rerun every time it enters
  });

  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowCount(false); // Reset
      setTimeout(() => setShowCount(true), 100); // Force rerender for ticker
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#345e69] py-12 md:py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16">
        {/* Stat Card 1 */}
        <div className="text-center md:text-left max-w-sm">
          <div className="flex items-baseline justify-center md:justify-start">
            {showCount && (
              <>
                <NumberTicker
                  value={8}
                  direction="up"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
                />
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold ml-1">+</span>
              </>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Years Experience</h3>
          <p className="text-sm md:text-base opacity-90">
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        {/* Stat Card 2 */}
        <div className="text-center md:text-left max-w-sm">
          <div className="flex items-baseline justify-center md:justify-start">
            {showCount && (
              <>
                <NumberTicker
                  value={500}
                  direction="up"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
                />
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold ml-1">+</span>
              </>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Individual Client Sessions
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>
      </div>
    </section>
  );
}
