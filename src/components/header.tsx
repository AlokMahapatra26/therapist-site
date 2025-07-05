"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

const navItems = [
  "services",
  "about",
  "testimonials",
  "faqs",
  "areas-served",
  "contact",
];

const serviceAreas = [
  {
    name: "Los Angeles, CA",
    description: "The heart of Southern California known for Hollywood, beaches, and vibrant city life."
  },
  {
    name: "Santa Monica, CA",
    description: "Coastal city famous for its iconic pier and beautiful sunsets."
  },
  {
    name: "Beverly Hills, CA",
    description: "Luxury and glamor in one of the most well-known neighborhoods in LA."
  },
  {
    name: "Pasadena, CA",
    description: "Historic architecture, cultural institutions, and the Rose Bowl."
  },
  {
    name: "Glendale, CA",
    description: "Diverse neighborhoods and access to Griffith Park."
  },
  {
    name: "Burbank, CA",
    description: "Home to major film studios and a thriving creative scene."
  },
  {
    name: "West Hollywood, CA",
    description: "Trendy shops, nightlife, and LGBTQ+ friendly community."
  },
  {
    name: "Culver City, CA",
    description: "Revitalized city with tech, arts, and entertainment."
  }
];

export function Header() {
  

  const getHref = (id:string) => (id === "areas-served" ? "/locations" : `#${id}`);

  return (
    <>
      <div className="bg-[#fef0ed] border-b border-black py-2 text-sm text-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-1 text-center sm:text-left">
          <div className="flex items-center text-xs sm:text-sm">
            <span className="flex items-center">
              <svg className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.22 18 3 13.78 3 8V6a1 1 0 011-1h2.153z" />
              </svg>
              (323) 555-0192
            </span>
          </div>
          <div className="flex items-center text-xs sm:text-sm max-w-full sm:max-w-none">
            <span className="flex items-center truncate">
              <svg className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              1287 Maplewood Drive, Los Angeles, CA 90026
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-[#f4f6fa]/80 backdrop-blur-md border-b border-black/5 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Dr. Serena Blake</h1>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">PsyD (Clinical Psychologist)</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 relative">
            {navItems.map((id) => {
              const isAreasServed = id === "areas-served";
              return (
                <div key={id} className={isAreasServed ? "relative group" : ""}>
                  <Link
                    href={getHref(id)}
                    className={`text-sm md:text-base lg:text-lg rounded-md p-2 transition-colors ${
                      isAreasServed ? "font-semibold group-hover:bg-white" : "hover:bg-white"
                    }`}
                  >
                    {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>

                  {isAreasServed && (
                    <div className="absolute top-full left-0 mt-4 w-[700px] max-h-[400px] overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl hidden group-hover:grid grid-cols-2 gap-4 p-4 z-50 transition-all duration-300">
                      {serviceAreas.map((location, i) => (
                        <Link
                          href="/locations"
                          key={i}
                          className="p-3 rounded-md hover:bg-blue-50 transition-colors duration-150"
                        >
                          <h4 className="text-sm font-semibold text-gray-800">{location.name}</h4>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{location.description}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/book">
              <Button
                variant="outline"
                className="items-center whitespace-nowrap rounded-md font-medium bg-secondary text-secondary-foreground hover:bg-mainComplimentary1 hover:text-darkMain1 transition-all duration-200 border-black border-[1px] text-base px-6 py-3 cursor-pointer"
                size="lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="block md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/80 backdrop-blur-md">
              <nav className="flex flex-col items-center gap-4 py-6 px-4">
                {navItems.map((id) => (
                  <Link
                    key={id}
                    href={getHref(id)}
                    className="w-full text-center py-3 px-4 text-lg font-semibold rounded-md text-gray-700 hover:underline transition-all"
                  >
                    {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}