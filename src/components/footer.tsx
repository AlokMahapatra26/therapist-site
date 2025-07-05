
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#345e69] text-white py-12 md:py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex flex-col items-center md:items-start space-y-2 mb-4">
           
            <div className="text-lg font-bold">Dr. Serena Black</div>
            <div className="text-sm">PsyD (Clinical Psychologist)</div>
          </Link>

          <div className="text-sm mb-2">
            <span className="font-semibold">Top Rated</span> |{" "}
            <Link href="#testimonials" className="underline hover:text-gray-300">
              Testimonials
            </Link>{" "}
            |{" "}
            <Link href="#media-mentions" className="underline hover:text-gray-300">
              Media Mentions
            </Link>
          </div>
          <p className="text-sm mb-2">
            4913 Fitzhugh Avenue,
            <br />
            Suite 102, Richmond, VA 23230
          </p>
          <p className="text-sm mb-4">(757) 474-5262</p>
          
        </div>

        {/* Column 2: Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#contact" className="hover:underline">
                Get In Touch
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ's
              </Link>
            </li>
           
            
          </ul>
        </div>

        {/* Column 3: Areas Served */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">AREAS SERVED</h3>
          <ul className="space-y-2 text-sm">
           <li>Los Angeles, CA</li>
            <li>Santa Monica, CA</li>
            <li>Beverly Hills, CA</li>
            <li>Pasadena, CA</li>
            <li>Glendale, CA</li>
            <li>Burbank, CA</li>
            <li>West Hollywood, CA</li>
            <li>Culver City, CA</li>
            <li>Inglewood, CA</li>
            <li>Marina del Rey, CA</li>
            <li>El Segundo, CA</li>
            <li>Manhattan Beach, CA</li>
            <li>Redondo Beach, CA</li>
            <li>Torrance, CA</li>
            <li>Long Beach, CA</li>
            <li>Downey, CA</li>
            <li>Whittier, CA</li>
            <li>San Gabriel, CA</li>
            <li>Alhambra, CA</li>
            <li>Monterey Park, CA</li>
            <li>La Crescenta-Montrose, CA</li>
            <li>Altadena, CA</li>

          </ul>
        </div>

        {/* Column 4: Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Anxiety & Stress Management</li>
            <li>Relationship Counseling</li>
            <li>Trauma Recovery Counseling</li>
          </ul>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="container mx-auto border-t border-gray-600 mt-12 pt-8 text-center text-xs text-gray-400">
        <p className="mb-2">
          Dr.Serena Blake &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="mb-2">
          Credits to freepik for media www.freepik.com People Illustrations
        </p>
        <p>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          &{" "}
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
