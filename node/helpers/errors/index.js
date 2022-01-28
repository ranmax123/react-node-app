/**
 * Error responses
 */

"use strict";

function HTTPNotFoundError(message) {
  this.message = message;
  this.name = "HTTPNotFoundError";
  Error.captureStackTrace(this, HTTPNotFoundError);
}
HTTPNotFoundError.prototype = Object.create(Error.prototype);

function SecurityError(message) {
  this.message = message;
  this.name = "SecurityError";
  Error.captureStackTrace(this, SecurityError);
}
SecurityError.prototype = Object.create(Error.prototype);

function SQLExceptionError(message) {
  this.message = message;
  this.name = "SQLExceptionError";
  Error.captureStackTrace(this, SQLExceptionError);
}
SQLExceptionError.prototype = Object.create(Error.prototype);

function BadRequestError(message) {
  this.message = message;
  this.name = "BadRequestError";
  this.status = 400;
  Error.captureStackTrace(this, SQLExceptionError);
}
BadRequestError.prototype = Object.create(Error.prototype);

function ValidationError(message) {
  this.message = message;
  this.name = "ValidationError";
  this.status = 422;
  Error.captureStackTrace(this, SQLExceptionError);
}
ValidationError.prototype = Object.create(Error.prototype);

function ResourceNotFoundError(message) {
  this.message = message;
  this.name = "ResourceNotFoundError";
  this.status = 404;
  Error.captureStackTrace(this, HTTPNotFoundError);
}
ResourceNotFoundError.prototype = Object.create(Error.prototype);

function ResourceConflictError(message) {
  this.message = message;
  this.name = "ResourceConflictError";
  this.status = 409;
  Error.captureStackTrace(this, ValidationError);
}
ResourceConflictError.prototype = Object.create(Error.prototype);

function UnAutherizedError(message) {
  this.message = message;
  this.name = "UnAutharizedError";
  this.status = 401;
  Error.captureStackTrace(this, ValidationError);
}
UnAutherizedError.prototype = Object.create(Error.prototype);

function LinkExpiredError(message) {
  this.message = message;
  this.name = "UnAutharizedError";
  this.status = 410;
  Error.captureStackTrace(this, ValidationError);
}
LinkExpiredError.prototype = Object.create(Error.prototype);

module.exports = {
  HTTPNotFoundError: HTTPNotFoundError,
  BadRequestError: BadRequestError,
  SecurityError: SecurityError,
  SQLExceptionError: SQLExceptionError,
  ValidationError: ValidationError,
  ResourceNotFoundError: ResourceNotFoundError,
  ResourceConflictError: ResourceConflictError,
  UnAutherizedError: UnAutherizedError,
  LinkExpiredError: LinkExpiredError,
};
