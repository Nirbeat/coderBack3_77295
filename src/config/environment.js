import { config } from "dotenv";

config({ path: ".env" });

export const env = {
    PORT: process.env.PORT
}