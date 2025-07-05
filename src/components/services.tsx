import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Anxiety & Stress Management",
      description:
        "Learn to manage overwhelming thoughts, reduce physical tension, and regain control of your day-to-day life with evidence-based approaches like CBT and mindfulness strategies.",
      image: "/stress.jpg",
    },
    {
      id: 2,
      title: "Relationship Counseling",
      description:
        "Whether you’re navigating conflict, rebuilding trust, or seeking deeper connection, our sessions offer a safe space to improve communication and strengthen your relationship.",
      image: "/relationship.jpg",
    },
    {
      id: 3,
      title: "Trauma Recovery Counseling",
      description:
        "Heal from past wounds in a supportive and non-judgmental environment. We use trauma-informed care to help you reclaim safety, self-worth, and emotional stability.",
      image: "/trauma.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center md:text-left">
          Services & Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-md border-2  bg-[#d4eeee] hover:shadow-lg transition-all duration-300 max-w-sm w-full p-3 "
            >
              <div className="group p-2">
  {/* Hover wrapper for content */}
  <div className="transition-transform duration-300 group-hover:translate-x-2">
    {/* Image */}
    <div className="relative w-full h-48 rounded-md overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>

    {/* Text Content */}
    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
      {service.title}
    </h3>
    <p className="text-base text-gray-700 mb-4">
      {service.description}
    </p>
  </div>
</div>

              

              
              <div className="mt-4 px-2">
               

                <Button
                  variant="outline"
                  className="cursor-pointer w-full bg-[#d4eeee] border border-gray-700 text-gray-800  font-medium text-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
