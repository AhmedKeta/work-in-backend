import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class NoBodyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (
      (req.method === "GET" || req.method === "DELETE") &&
      Object.keys(req.body).length !== 0
    ) {
      return res
        .status(400)
        .send("Body not allowed for GET or DELETE requests");
    }
    next();
  }
}
