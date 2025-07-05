// app/page.tsx
import { Header } from "@/components/header";
import { AboutSection } from "@/components/about-section";
import { FreeConsultationForm } from "@/components/free-consultation-form";
import { TestimonialsSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { ServicesSection } from "@/components/services";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow bg-[#b5dbdf]">
        {/* Main Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* About Section */}
            <div>
              <AboutSection />
            </div>

            {/* Form Section */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md">
                <FreeConsultationForm />
              </div>
            </div>
          </div>
          <TestimonialsSection/>
          <ServicesSection/>
          <FAQSection/>
        </section>
      </main>

     <Footer/>
    </div>
  );
}
