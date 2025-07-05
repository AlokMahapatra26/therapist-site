// app/locations/page.tsx or pages/locations.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const californiaLocations = [
  "Los Angeles, CA",
  "Santa Monica, CA",
  "Beverly Hills, CA",
  "Pasadena, CA",
  "Glendale, CA",
  "Burbank, CA",
  "West Hollywood, CA",
  "Culver City, CA",
  "Inglewood, CA",
  "Marina del Rey, CA",
  "El Segundo, CA",
  "Manhattan Beach, CA",
  "Redondo Beach, CA",
  "Torrance, CA",
  "Long Beach, CA",
  "Downey, CA",
  "Whittier, CA",
  "San Gabriel, CA",
  "Alhambra, CA",
  "Monterey Park, CA",
  "La Crescenta-Montrose, CA",
  "Altadena, CA",
].map((city) => ({
  title: city,
  description: `We offer in-person therapy sessions in ${city}.`,
  address: `California, near Los Angeles metro area`,
  phone: "(757) 474-5262",
}));

export default function LocationsPage() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Our Locations</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        We provide comprehensive therapy services across multiple locations in California, offering both in-person and online sessions to best serve your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {californiaLocations.map((loc, i) => (
          <Card key={i} className="flex flex-col justify-between h-full">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{loc.title}</h3>
                <p className="text-sm text-muted-foreground">{loc.description}</p>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{loc.phone}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Link href="/book">
                <Button className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
                </Link>
               
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
