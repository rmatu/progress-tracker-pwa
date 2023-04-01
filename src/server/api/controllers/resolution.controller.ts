import { TRPCError } from "@trpc/server";
import {
  CreateResolutionInput,
  FilterQueryInput,
} from "../schema/resolution.schema";
import {
  createResolution,
  findAllResolutions,
} from "../services/resolution.service";
import type { ApiCtx } from "./../trpc";

export const createResolutionHandler = async ({
  input,
  ctx,
}: {
  input: CreateResolutionInput;
  ctx: ApiCtx;
}) => {
  try {
    const { session, prisma } = ctx;

    const resolution = await createResolution({
      prisma,
      input: {
        ...input,
        userId: session?.user?.id,
      },
    });

    return {
      status: "success",
      data: resolution,
    };
  } catch (err: any) {
    if (err.code === "P2002") {
      throw new TRPCError({
        code: "CONFLICT",
        message: "Post with that title already exists",
      });
    }
    throw err;
  }
};

export const getResolutionsHandler = async ({
  filterQuery,
  ctx,
}: {
  filterQuery: FilterQueryInput;
  ctx: ApiCtx;
}) => {
  const { prisma } = ctx;
  const { limit, page } = filterQuery ?? { limit: 10, page: 1 };

  try {
    const resolutions = await findAllResolutions({ page, limit, prisma });

    return {
      status: "success",
      results: resolutions.length,
      data: {
        posts: resolutions,
      },
    };
  } catch (err: any) {
    console.log(err);
  }
};
