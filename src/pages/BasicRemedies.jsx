import React from "react";

const BasicRemedies = () => {
  const remedies = [
    {
      id: 1,
      title: "Honey and Lemon for Sore Throat",
      image: "https://via.placeholder.com/300",
      description:
        "A warm mixture of honey and lemon can soothe your sore throat and reduce irritation.",
      fullDescription:
        "Mix a tablespoon of honey and a few drops of fresh lemon juice into a cup of warm water. Sip this mixture slowly to ease your sore throat. Honey has antibacterial properties, and lemon helps reduce mucus buildup.",
    },
    {
      id: 2,
      title: "Turmeric Milk for Cough",
      image: "https://via.placeholder.com/300",
      description:
        "Golden milk (turmeric milk) is an age-old remedy for colds and coughs.",
      fullDescription:
        "To prepare turmeric milk, mix half a teaspoon of turmeric powder into a cup of warm milk. Add a pinch of black pepper to enhance absorption. This drink boosts immunity and reduces inflammation.",
    },
    {
      id: 3,
      title: "Aloe Vera for Skin Burns",
      image: "https://via.placeholder.com/300",
      description:
        "Aloe vera gel can soothe burns and promote faster healing of the skin.",
      fullDescription:
        "Apply fresh aloe vera gel directly to the affected area. Its cooling properties provide instant relief, while its anti-inflammatory agents aid in healing.",
    },
    {
      id: 4,
      title: "Ginger Tea for Nausea",
      image: "https://via.placeholder.com/300",
      description:
        "Ginger tea is a natural remedy for nausea and digestive discomfort.",
      fullDescription:
        "Boil a few slices of fresh ginger in water for 10 minutes. Strain the tea and drink it warm. Ginger helps relax the stomach muscles and improves digestion, making it effective for nausea.",
    },
    {
      id: 5,
      title: "Cucumber for Puffy Eyes",
      image: "https://via.placeholder.com/300",
      description:
        "Cucumber slices can reduce puffiness and refresh tired eyes.",
      fullDescription:
        "Place chilled cucumber slices on your closed eyes for 10–15 minutes. The antioxidants and cooling properties help reduce swelling and hydrate the skin around the eyes.",
    },
    {
      id: 6,
      title: "Basil Leaves for Cough",
      image: "https://via.placeholder.com/300",
      description:
        "Chewing basil leaves can help relieve cough and respiratory issues.",
      fullDescription:
        "Boil a few basil leaves in water to make tea, or chew them fresh. Basil has antimicrobial and anti-inflammatory properties that can soothe the throat and reduce coughing.",
    },
    {
      id: 7,
      title: "Garlic for Cold and Flu",
      image: "https://via.placeholder.com/300",
      description:
        "Garlic is a powerful remedy for boosting immunity and fighting colds.",
      fullDescription:
        "Crush a clove of garlic and mix it with honey or warm water. Garlic contains allicin, which has antiviral and antibacterial properties to combat infections.",
    },
    {
      id: 8,
      title: "Yogurt for Sunburn",
      image: "https://via.placeholder.com/300",
      description:
        "Applying plain yogurt can cool sunburned skin and reduce redness.",
      fullDescription:
        "Spread plain yogurt on the affected area and leave it for 15–20 minutes before rinsing with cool water. Yogurt's probiotics and lactic acid help soothe inflammation and restore the skin's natural barrier.",
    },
    {
      id: 9,
      title: "Peppermint Oil for Headaches",
      image: "https://via.placeholder.com/300",
      description:
        "Peppermint oil can provide quick relief from headaches and migraines.",
      fullDescription:
        "Dilute a few drops of peppermint oil with a carrier oil and massage it onto your temples. The menthol in peppermint oil helps improve blood flow and provides a soothing effect.",
    },
    {
      id: 10,
      title: "Saltwater Gargle for Sore Throat",
      image: "https://via.placeholder.com/300",
      description:
        "Gargling with warm saltwater can reduce throat pain and inflammation.",
      fullDescription:
        "Dissolve half a teaspoon of salt in a glass of warm water. Gargle for 30 seconds and spit it out. This helps reduce swelling and kill bacteria in the throat.",
    },
  ];

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Home Remedies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {remedies.map((remedy) => (
          <div
            key={remedy.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={remedy.image}
              alt={remedy.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{remedy.title}</h2>
              <p className="text-gray-600 mb-4">{remedy.description}</p>
              <button
                className="text-primary font-medium"
                onClick={() =>
                  alert(`Full Description: \n\n${remedy.fullDescription}`)
                }
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicRemedies;
