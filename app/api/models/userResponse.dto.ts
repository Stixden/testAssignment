import z from "zod";

export const GetUserResponseDto = z.object({
  username: z.string(),
  age: z.number().min(1).max(100),
  user_id: z.string(),
});

export type GetUserResponseDto = z.infer<typeof GetUserResponseDto>;

export const PostUserResponseDto = z.object({
  user_id: z.string(),
  username: z.string(),
});

export type PostUserResponseDto = z.infer<typeof PostUserResponseDto>;
