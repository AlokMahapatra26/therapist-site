import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function ScheduleConsultationSection() {
  return (
    <section className="bg-[#1e4145] py-16 md:py-24 text-white text-center px-4 relative overflow-visible">
      
      {/* Leaf Outside Positioned */}
      <div className="absolute -top-12 right-0 md:-top-60 md:right-8 z-10 hidden lg:block">
  <Image
    src="/leaf.webp"
    alt="Leaf Design"
    width={180}
    height={180}
    className="object-contain"
  />
</div>


      <div className="container mx-auto max-w-3xl relative z-20">
        {/* Main Heading */}
        <h2 className="text-3xl text-[#b5dbdf] sm:text-4xl md:text-5xl font-bold mb-4">
          Schedule A Consultation
        </h2>

        {/* Description */}
        <p className="text-[#b5dbdf] sm:text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          Dr. Serena Blake is currently accepting new clients. Available for online
          and in-person sessions.
        </p>

        {/* CTA Button */}
        <Button className="bg-transparent border-2 text-md border-white text-[#b5dbdf] hover:bg-white hover:text-black cursor-pointer" size="lg">
          <Sparkles className="mr-2" />
          Start Healing
        </Button>
      </div>
    </section>
  );
}
