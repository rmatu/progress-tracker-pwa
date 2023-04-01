import { z } from "zod";

export const createResolutionSchema = z.object({
  name: z.string(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type CreateResolutionInput = z.TypeOf<typeof createResolutionSchema>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
