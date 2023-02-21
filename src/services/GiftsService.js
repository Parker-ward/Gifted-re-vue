import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxAPI } from "./AxiosService.js"

class GiftsService {

  async getGifts() {
    const res = await sandboxAPI.get('/models/gift')
    logger.log("get them gifts", res.data)
    AppState.gifts = res.data.map(g => new Gift(g))

  }
}


export const giftsService = new GiftsService()