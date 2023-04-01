import resolutionRouter from "./routers/resolution.routes";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  resolutions: resolutionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
