export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }

  toJSON() {
    return {
      message: this.message,
      status: this.status,
    };
  }

  static badRequest(message: string) {
    return new CustomError(message, 400);
  }

  static notFound(message: string) {
    return new CustomError(message, 404);
  }

  static internal(message: string) {
    return new CustomError(message, 500);
  }

  static unauthorized(message: string) {
    return new CustomError(message, 401);
  }

  static forbidden(message: string) {
    return new CustomError(message, 403);
  }

  static conflict(message: string) {
    return new CustomError(message, 409);
  }

  static preconditionFailed(message: string) {
    return new CustomError(message, 412);
  }

  static notAcceptable(message: string) {
    return new CustomError(message, 406);
  }

  static notImplemented(message: string) {
    return new CustomError(message, 501);
  }

  static serviceUnavailable(message: string) {
    return new CustomError(message, 503);
  }

  static gatewayTimeout(message: string) {
    return new CustomError(message, 504);
  }

  static badGateway(message: string) {
    return new CustomError(message, 502);
  }

  static networkAuthenticationRequired(message: string) {
    return new CustomError(message, 511);
  }

  static unknown(message: string) {
    return new CustomError(message, 0);
  }
}
