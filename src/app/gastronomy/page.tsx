import Image from "next/image"

export default function Gastronomy() {
  const restaurants = [
    {
      name: "Restaurante O Barco",
      location: "Balneário Camboriú, SC",
      image: "/assets/gastronomy/barco.jpg",
      description: "Known for its fresh seafood dishes and beachside location.",
    },
    {
      name: "Ostradamus",
      location: "Florianópolis, SC",
      image: "/assets/gastronomy/ostradamus.jpg",
      description: "A must-visit spot for oyster lovers, located in the charming Ribeirão da Ilha.",
    },
    {
      name: "Le Poulet Rouge",
      location: "Balneário Camboriú, SC",
      image: "/assets/gastronomy/le-poulet-rouge.jpg",
      description: "A charming French-inspired bistro offering delicious poultry dishes and a cozy atmosphere.",
    },
    {
      name: "Quintal do Félix",
      location: "Navegantes, SC",
      image: "/assets/gastronomy/quintal-do-felix.jpg",
      description: "A charming local restaurant in Navegantes offering fresh seafood and regional dishes in a cozy and rustic atmosphere.",
    },
    {
      name: "Sushiarte Praia Brava",
      location: "Itajaí, SC",
      image: "/assets/gastronomy/sushiarte.jpg",
      description: "A sushi restaurant offering fresh and creative Japanese dishes with an artistic touch, located in the stunning Praia Brava.",
    }
  ]

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">
        Gastronomy by the Coast
      </h1>
      <p className="text-zinc-600 mb-8">
        {"Discover the best dining experiences along Brazil's coastal towns. From fresh seafood to international cuisine, these restaurants offer unforgettable flavors."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
              width={2000}
              height={2000}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">
                {restaurant.name}
              </h2>
              <p className="text-sm text-zinc-500 italic">
                {restaurant.location}
              </p>
              <p className="text-zinc-500 text-sm mt-2">
                {restaurant.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
