import {
  createResolutionSchema,
  filterQuery,
} from "./../schema/resolution.schema";
import {
  createResolutionHandler,
  getResolutionsHandler,
} from "../controllers/resolution.controller";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const resolutionRouter = createTRPCRouter({
  createResolution: protectedProcedure
    .input(createResolutionSchema)
    .mutation(({ ctx, input }) => createResolutionHandler({ ctx, input })),
  getResolutions: protectedProcedure
    .input(filterQuery)
    .query(({ ctx, input }) =>
      getResolutionsHandler({ ctx, filterQuery: input })
    ),
});

export default resolutionRouter;
