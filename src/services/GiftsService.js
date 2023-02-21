import { logger } from "../utils/Logger.js"
import { sandboxAPI } from "./AxiosService.js"


class GiftsService {

  async getGifts() {
    const res = await sandboxAPI.get('/models/gift')
    logger.log("get them gits", res.data)

  }
}


export const giftsService = new GiftsService()