import Medusa from "@medusajs/medusa-js";

const MEDUSA_API_URL = process.env.NEXT_PUBLIC_MEDUSA_API_URL || "https://vraiapi.trottipieces.fr";

export const medusaClient = new Medusa({ 
  baseUrl: MEDUSA_API_URL,
  maxRetries: 3,
});
