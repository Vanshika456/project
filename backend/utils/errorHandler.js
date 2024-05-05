class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);// error class constructor
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
// used inheritance concept here 