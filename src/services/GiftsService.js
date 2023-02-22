import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { sandboxAPI } from "./AxiosService.js"

class GiftsService {

  async getGifts() {
    const res = await sandboxAPI.get('gifts')
    logger.log("get them gifts", res.data)
    AppState.gifts = res.data

  }
}


export const giftsService = new GiftsService()