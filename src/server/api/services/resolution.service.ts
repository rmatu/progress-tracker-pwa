import { Prisma } from "@prisma/client";
import { ApiCtx } from "../trpc";

export const createResolution = async ({
  prisma,
  input,
}: {
  prisma: ApiCtx["prisma"];
  input: Prisma.ResolutionUncheckedCreateInput;
}) => {
  return await prisma.resolution.create({
    data: input,
  });
};

export const findAllResolutions = async ({
  page,
  limit,
  prisma,
}: {
  page: number;
  limit: number;
  prisma: ApiCtx["prisma"];
}) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return await prisma.resolution.findMany({
    include: { user: true },
    skip,
    take,
  });
};
