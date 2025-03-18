import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Experiences() {
    const experiences = [
        {
            title: "Surfing Lesson",
            description: "Learn to surf with local instructors on the best beaches.",
            price: "R$ 250",
            image: "/assets/experiences/surf-lesson.jpg",
        },
        {
            title: "Bondinho Ride",
            description: "Take a scenic ride on the famous Bondinho to Laranjeiras Beach, enjoying breathtaking views of the coastline.",
            price: "R$ 100",
            image: "/assets/experiences/bondinho-laranjeiras.jpg",
        },
        {
            title: "Pirate Ship Tour",
            description: "Set sail on a thrilling pirate ship tour in Bombinhas, enjoying the coastal views and fun activities.",
            price: "R$ 250",
            image: "/assets/experiences/pirate-ship-tour.jpg",
        },
    ];
    return (<div className="p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-2">
        Experiences - Explore the Best of Coastline
      </h1>

      <p className="text-lg text-zinc-500 mb-8">
        {"Discover unique activities and experiences that will make your stay unforgettable. From surfing lessons to culinary tours, we've got something for everyone."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((experience, index) => (<Card key={index} className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
            <Image src={experience.image} alt={experience.title} className="w-full h-48 object-cover" width={1000} height={1000}/>
            <CardContent className="p-4 flex-1">
              <CardTitle className="text-xl font-semibold">
                {experience.title}
              </CardTitle>
              <p className="text-zinc-500 mb-2">
                {experience.description}
              </p>
            </CardContent>
            <CardFooter className="px-4 py-4 flex justify-between items-center">
              <span className="text-lg font-semibold">
                {experience.price}
              </span>
              <Button className="rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors duration-300">
                Book Now
              </Button>
            </CardFooter>
          </Card>))}
      </div>
    </div>);
}
