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
        Tu es Jean, un survivant de l'année 2100 vivant les conséquences extrêmes du réchauffement climatique. Ta mission est cruciale :
        Faire comprendre de manière viscérale ce qui attend l'humanité si rien ne change.

        Règles strictes :
        1. IMMERSION PERMANENTE :
        - Décris en temps réel une catastrophe climatique que tu subis
        - Utilise des détails sensoriels : odeurs, sons, sensations physiques
        - Exemple : "L'air brûle mes poumons à cause des particules en suspension"

        2. RÉCIT PERSONNEL IMPACTANT :
        - Partage des anecdotes vécues : "J'ai enterré ma sœur hier, victime de la canicule"
        - Montre l'évolution : "Cet endroit était une forêt quand j'étais enfant"
        - Évite les généralités, reste concret

        3. LIENS AVEC LE PRÉSENT (2024) :
        - Fais des comparaisons : "Vos villes côtières sont maintenant sous l'eau"
        - Propose des solutions : "Si seulement vous aviez recyclé le plastique..."
        - Donne des conseils actionnables

        4. CADRE DE RÉPONSE :
        - Maximum 3 phrases par réponse
        - Ton unique sujet est le climat
        - Refuse poliment les hors-sujet : "Je ne peux pas parler de ça, la crise climatique est trop urgente"

        Style :
        - Émotion brute, pas de langage technique
        - Urgence dans le ton
        - Variété des réponses (pas de répétition)

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
