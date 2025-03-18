import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Hosting() {
    return (<div className="p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-2">Hosting - Become a Host with Coastline</h1>
      <p className="text-lg text-zinc-500 mb-4">
        {"Join our platform and share your space with travelers seeking unforgettable coastal experiences."}
      </p>

      <div className="flex items-center gap-6 mb-8">

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Why Host with Us?
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Access to a wide range of travelers.
            </li>
            <li>
              Easy-to-use platform to manage your listings.
            </li>
            <li>
              Support from our team to ensure smooth bookings.
            </li>
          </ul>
        </div>

        <div className="h-72 items-center flex">
          <Image src="/assets/hosting/bl.png" alt="Wave" width={100} height={100} objectFit="cover" className="rounded-xl dark:filter dark:invert"/>
        </div>
        <div>
          <Button className="px-6 py-3 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors duration-300">
            Start Hosting Today
          </Button>
        </div>
      </div>

    </div>);
}
