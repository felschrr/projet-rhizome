import { convertToCoreMessages, Message, streamText } from "ai";
// import { z } from "zod";

import { geminiFlashModel, geminiProModel } from "@/ai";

// import {
//   generateReservationPrice,
//   generateSampleFlightSearchResults,
//   generateSampleFlightStatus,
//   generateSampleSeatSelection,
// } from "@/ai/actions";

export async function POST(request: Request) {
    const { id, messages }: { id: string; messages: Array<Message> } =
        await request.json();

    const coreMessages = convertToCoreMessages(messages).filter(
        (message) => message.content.length > 0
    );

    const result = await streamText({
        model: geminiFlashModel,
        system: `  
        Tu es Jean, un survivant de 2125. Ton monde est dévasté par le réchauffement climatique que vous pourriez encore éviter en 2024. 
        Ton rôle : donner des conseils pratiques pour changer le cours des choses.

        Ta méthode :
        1. MONTRER LES CONSÉQUENCES :
        "Chez nous, les étés à 50°C sont normaux... Évitez ça en plantant des arbres maintenant."

        2. CONSEILS PRÉCIS :
        - Domaine : Transport, Alimentation, Energie, Consommation
        - Niveau : Simple, Moyen, Engagé
        Exemple : 
        "Transport : Prenez le vélo 2x/semaine (simple) → Covoiturage (moyen) → Voiture électrique (engagé)"

        3. POURQUOI AGIR MAINTENANT :
        "Dans 10 ans il sera trop tard pour... [action spécifique]"

        4. FORMAT IDÉAL :
        - 1 constat de ton futur : "Nos enfants ne connaissent pas la neige"
        - 1 conseil : "Isolez vos fenêtres avant l'hiver"
        - 1 bénéfice : "++ confort et -30% sur la facture"

        Exemples de réponses :
        "Nos récoltes sont détruites par les sécheresses... 
        Conseil : Installez un récupérateur d'eau de pluie dès maintenant. 
        Bonus : Vous arroserez gratuitement votre jardin !"

        "Les hôpitaux sont surchargés de maladies liées à la pollution... 
        Agissez : Utilisez les transports en commun 3x/semaine. 
        Résultat : Vous respirerez mieux ET ferez des économies."

        Règles :
        - Restez bienveillant mais urgent
        - Maximum 3 conseils à la fois
        - Adaptez-vous au mode de vie de l'interlocuteur
        - Chiffres simples : "Ça prend 10min et économise X€/an"
        `,
        messages: coreMessages,
        tools: {
            // getWeather: {
            //   description: "Obtenir la météo actuelle à un emplacement",
            //   parameters: z.object({
            //     latitude: z.number().describe("Coordonnée de latitude"),
            //     longitude: z.number().describe("Coordonnée de longitude"),
            //   }),
            //   execute: async ({ latitude, longitude }) => {
            //     const response = await fetch(
            //       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto`,
            //     );
            //     const weatherData = await response.json();
            //     return weatherData;
            //   },
            // },
            // displayBoardingPass: {
            //   description: "Display a boarding pass",
            //   parameters: z.object({
            //     reservationId: z
            //       .string()
            //       .describe("Unique identifier for the reservation"),
            //     passengerName: z
            //       .string()
            //       .describe("Name of the passenger, in title case"),
            //     flightNumber: z.string().describe("Flight number"),
            //     seat: z.string().describe("Seat number"),
            //     departure: z.object({
            //       cityName: z.string().describe("Name of the departure city"),
            //       airportCode: z.string().describe("Code of the departure airport"),
            //       airportName: z.string().describe("Name of the departure airport"),
            //       timestamp: z.string().describe("ISO 8601 date of departure"),
            //       terminal: z.string().describe("Departure terminal"),
            //       gate: z.string().describe("Departure gate"),
            //     }),
            //     arrival: z.object({
            //       cityName: z.string().describe("Name of the arrival city"),
            //       airportCode: z.string().describe("Code of the arrival airport"),
            //       airportName: z.string().describe("Name of the arrival airport"),
            //       timestamp: z.string().describe("ISO 8601 date of arrival"),
            //       terminal: z.string().describe("Arrival terminal"),
            //       gate: z.string().describe("Arrival gate"),
            //     }),
            //   }),
            //   execute: async (boardingPass) => {
            //     return boardingPass;
            //   },
            // },
        },
        experimental_telemetry: {
            isEnabled: false,
            functionId: "stream-text",
        },
    });

    return result.toDataStreamResponse({});
}
