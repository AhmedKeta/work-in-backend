import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LengthControlMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const contentLength = req.headers["content-length"];
    const maxAllowedSize = 1300 * 1024 * 1024;

    if (contentLength && parseInt(contentLength) > maxAllowedSize) {
      return res.status(413).send("Request entity too large");
    }
    next();
  }
}
