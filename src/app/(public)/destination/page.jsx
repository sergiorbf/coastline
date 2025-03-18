'use client';
import Image from "next/image";
export default function Destination() {
    const destinations = [
        {
            name: "Balneário Camboriú",
            url: "/assets/destinations/bc.jpg",
            description: "Known as the Brazilian Dubai, famous for its nightlife and stunning beaches.",
        },
        {
            name: "Florianópolis",
            url: "/assets/destinations/floripa-lagoinha.jpg",
            description: "An island paradise with over 40 beaches, perfect for surfing and relaxation.",
        },
        {
            name: "Itajaí",
            url: "/assets/destinations/brava.jpg",
            description: "A charming coastal town known for its port, gastronomy, and nearby beaches.",
        },
        {
            name: "Bombinhas",
            url: "/assets/destinations/bombinhas.jpg",
            description: "A small paradise with crystal-clear waters, ideal for snorkeling and diving.",
        },
        {
            name: "Itapema",
            url: "/assets/destinations/itapema.jpg",
            description: "A cozy coastal city with golden sands and calm waters, perfect for families.",
        },
        {
            name: "Praia do Rosa",
            url: "/assets/destinations/rosa.jpg",
            description: "A stunning beach with lush landscapes, popular among surfers and nature lovers.",
        },
    ];
    return (<div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Popular Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (<div key={index} className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src={destination.url} alt={destination.name} className="w-full h-48 object-cover" width={1000} height={1000}/>
            <div className="p-4">
              <h2 className="text-lg font-bold">{destination.name}</h2>
              <p className="text-zinc-500 text-sm mt-2">{destination.description}</p>
            </div>
          </div>))}
      </div>
    </div>);
}
