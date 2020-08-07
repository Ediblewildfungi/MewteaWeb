/**
 * MewteaMaid - middleware (https://github.com/Ediblewildfungi/MewteaMaid/tree/master/src/server/middleware)
 * author    horochx <horochx@gmail.com> (https://github.com/horochx)
 * link      https://github.com/Ediblewildfungi/MewteaMaid/tree/master/src/server/middleware  MewteaMaid source repository
 * copyright Copyright (c) 2020 WildNya,horochx 
 * license   https://github.com/Ediblewildfungi/MewteaMaid/blob/master/LICENSE MIT License
 * package   MewteaMaid
 *
 */

module.exports = () => (ctx, next) => {
  ctx.sendOk = (response) => {
    ctx.body = {
      ok: true,
      data: response,
    }
  }

  ctx.sendError = (errorMessage) => {
    ctx.body = {
      ok: false,
      message: errorMessage,
    }
  }

  return next()
}
