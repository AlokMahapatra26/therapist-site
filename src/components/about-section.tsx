import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-[#b5dbdf] py-12 md:py-20 px-4" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12">
        
        {/* Left: Image with border + overlay */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
  <div className="border-[6px] border-white rounded-lg overflow-hidden relative max-w-xs w-full shadow-lg">
    
    {/* Image */}
    <div className="relative w-full h-[22rem]">
      <Image
        src="/therapist.jpg"  
        alt="Dr Serena Black"
        fill
        className="object-cover"
      />
    </div>

    {/* Info Tag - tightly at bottom */}
    <div className="absolute bottom-0 left-0 right-0 bg-white/60 px-3 py-2 text-sm shadow-md rounded-tr-md rounded-br-md mr-6">

      <div className="font-semibold text-black">Dr. Serena Black</div>
      <div className="text-xs text-gray-800 mt-1 font-semibold">⭐ Top Rated | 8+ Years Experience</div>
    </div>
  </div>
</div>


        {/* Right: Description */}
        <div className="w-full lg:w-2/3 text-gray-800">
          <div className="bg-[#fcf2c7] text-sm md:text-base px-4 py-2 rounded-md inline-block mb-6 font-medium">
            About Dr. Serena Black - Experienced Therapist from mapleWood , Los Angeles CA
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hi I&apos;m Dr. Serena Black
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <strong>eight years of experience and over 500 client sessions.</strong> She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
