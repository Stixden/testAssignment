import { GetUserResponseDto, PostUserResponseDto } from "@api/models/userResponse.dto";
import { RequestHolder } from "@app/abstractClasses";
import { validateSchema } from "@app/utils/zod.helper";
import { APIResponse } from "@playwright/test";
import { step } from "@utils/step";

export type BaseResponse<T> = {
  resp: APIResponse;
  jsonResp: T;
};

export class Api extends RequestHolder {
  @step()
  async getUser(user_id: string): Promise<BaseResponse<GetUserResponseDto>> {
    const resp = await this.request.get(`/user`, {
      params: {
        user_id,
      },
    });
    const jsonResp = await validateSchema(resp, GetUserResponseDto);
    return { resp, jsonResp };
  }

  async postUser(username: string, age: number, user_type: boolean): Promise<BaseResponse<PostUserResponseDto>> {
    const resp = await this.request.post(`/user`, {
      data: {
        username,
        age,
        user_type,
      },
    });
    const jsonResp = await validateSchema(resp, PostUserResponseDto);
    return { resp, jsonResp };
  }
}
