import React from 'react';
import { cn } from "@/lib/utils"; // Assuming you have this utility for conditional classes
import { Marquee } from "@/components/magicui/marquee";


  
const testimonials = [
  {
    name: "A. Patel", 
    username: "anxietyrelief",
    body: "Dr. Blake helped me navigate through my severe anxiety. Her blend of CBT and mindfulness provided practical tools, and her compassionate approach made me feel truly understood. I finally feel a sense of calm I haven't experienced in years.",
    img: "https://avatar.vercel.sh/client_a", // Generic or placeholder avatar
  },
  {
    name: "J. Miller",
    username: "relationshipgrowth",
    body: "Our relationship was struggling, and Dr. Blake provided invaluable insights and strategies. She created a safe space for open communication, and we've built a much stronger connection thanks to her guidance.",
    img: "https://avatar.vercel.sh/client_b",
  },
  {
    name: "S. Chen",
    username: "healingjourney",
    body: "Healing from past trauma felt impossible, but Dr. Blake's expertise and empathy made it achievable. She's incredibly skilled, and I appreciate her balanced use of evidence-based methods with truly personalized care. My sessions, both in-office and virtual, were consistently supportive.",
    img: "https://avatar.vercel.sh/client_c",
  },
  {
    name: "L. Garcia",
    username: "mindfulnessmastery",
    body: "I learned so much about mindfulness from Dr. Blake. Her sessions are not just therapy; they're empowering lessons in self-management. Highly recommend her if you're looking for genuine growth.",
    img: "https://avatar.vercel.sh/client_d",
  },
  {
    name: "K. Jones",
    username: "transformativecare",
    body: "After trying other therapists, Dr. Blake was a breath of fresh air. Her eight years of experience are evident in her insightful questions and effective techniques. She genuinely cares, and it shows in every session.",
    img: "https://avatar.vercel.sh/client_e",
  },
  {
    name: "M. White",
    username: "virtualsupport",
    body: "Connecting virtually via Zoom with Dr. Blake was incredibly convenient and just as effective as an in-person session. She maintains that supportive and safe environment no matter the format. Truly grateful for her help with my anxiety.",
    img: "https://avatar.vercel.sh/client_f",
  },
  {
    name: "E. Davies",
    username: "traumahealing",
    body: "Dr. Blake guided me through a very difficult period of trauma recovery with such grace and professionalism. Her blend of therapies helped me process emotions and develop resilience. I can't thank her enough.",
    img: "https://avatar.vercel.sh/client_g",
  },
  {
    name: "R. Singh",
    username: "effectivemethods",
    body: "Her approach is incredibly effective. I appreciate her reliance on evidence-based practices; it made me feel confident in the process. Dr. Blake is truly committed to her clients' well-being.",
    img: "https://avatar.vercel.sh/client_h",
  },
];


const secondRowTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

// ReviewCard component adapted for your testimonial structure
const TestimonialCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-6", 
        "border-gray-950/[.1] bg-[#e2eef1] ", 
        "dark:border-gray-50/[.1] dark:bg-gray-900",
        "shadow-md  " 
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-2"> 
        
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-gray-800 dark:text-white">
            {name}
          </figcaption>
          
        </div>
      </div>
      <blockquote className="mt-2 text-gray-700 leading-relaxed dark:text-gray-300">
        &ldquo;{body}&rdquo; {/* Added quotes for better testimonial feel */}
      </blockquote>
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <section id='testimonials' className="bg-[#b5dbdf] py-12 md:py-20 px-4" >
      <div className="container mx-auto">
        {/* Small top banner */}
        <div className="bg-[#ffe79e] text-sm md:text-base px-4 py-2 rounded-md inline-block mb-6 font-medium text-gray-800">
          Client Success Stories & Testimonials
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What Former Clients Say
        </h2>

        {/* Description Paragraph */}
        <p className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl">
          Real experiences from individuals who have found healing and growth through
          our work together.
        </p>

        {/* Testimonial Cards Container - Using Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          

         
          {secondRowTestimonials.length > 0 && ( // Only render if there are enough testimonials for a second row
            <Marquee reverse pauseOnHover className="[--duration:100s] [--gap:2rem]">
              {secondRowTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          )}

          {/* Fading effects at the ends (optional, for a seamless look) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#b5dbdf]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#b5dbdf]"></div>
        </div>
      </div>
    </section>
  );
}