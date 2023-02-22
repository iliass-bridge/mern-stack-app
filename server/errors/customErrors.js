export class CustomError extends Error {
  constructor(message, code = 'INTERNAL_ERROR', status = 500, data = {}) {
    super();
    this.message = message;
    this.code = code;
    this.status = status;
    this.data = data;
  }
}

export class RouteNotFoundError extends CustomError {
  constructor(originalUrl) {
    super(`Route '${originalUrl}' does not exist.`, 'ROUTE_NOT_FOUND', 404);
  }
}

export class BadUserInputError extends CustomError {
  constructor(errorData) {
    super('There were validation errors.', 'BAD_USER_INPUT', 400, errorData);
  }
}

export class DuplicateUserError extends CustomError {
  constructor() {
    super(`User is already registered`, 'DUPLICATE_USER', 409);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message, 'UNAUTHORIZED', 401);
  }
}

export class ForbiddenError extends CustomError {
  constructor() {
    super(`forbidden`, 'FORBIDDEN', 403);
  }
}

export class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid.') {
    super(message, 'INVALID_TOKEN', 401);
  }
}
