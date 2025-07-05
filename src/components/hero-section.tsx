"use client";
import Image from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import { Sparkles} from "lucide-react";
import Link from "next/link";
import { WordRotate } from "@/components/magicui/word-rotate";


export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg" // Ensure this image is in your public folder
        alt="Dr. Serena Blake Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto ">
        {/* Tagline */}
        <p className="text-white text-xs  mb-2 tracking-wide uppercase">
          Clinical Psychology in Los Angeles & Virtual Nationwide
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Personalized Therapy for Anxiety, Relationships, and Trauma
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow">
          Dr. Serena Blake, PsyD, offers evidence-based care through CBT,
          mindfulness, and deep empathy whether you meet virtually or at her Maplewood Drive office.
          <br />
          Let’s start your healing journey together.
        </p>

      {/* Rotating text */}
     <WordRotate  className="text-xl font-bold text-white dark:text-white" words={["Greater Peace in Your Heart", "Greater Love in Your Relationships" , "Greater Purpose in Your Life Direction"]} />
        
        {/* Subtle Stats/Badges Row */}
<div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-white/90 text-sm sm:text-base font-medium">
  <span className="flex items-center gap-1">
    <span>⭐</span> Top Rated
  </span>
  <span>•</span>
  <span className="hover:underline cursor-pointer">8 Years of Practice</span>
  <span>•</span>
  <span className="hover:underline cursor-pointer">500+ Sessions</span>
  <span>•</span>
  <span className="hover:underline cursor-pointer">Testimonials</span>
</div>


        {/* CTA */}
        <Link href="/book">
          <RainbowButton variant="outline" className="p-6 m-4 text-xl">
            <Sparkles />
            Schedule Your First Session
          </RainbowButton>
        </Link>

      </div>
    </section>
  );
}
