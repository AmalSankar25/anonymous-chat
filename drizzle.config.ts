import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	schema: "drizzle/schema.ts",
	out: "drizzle/migrations",
	casing: "snake_case",
});
