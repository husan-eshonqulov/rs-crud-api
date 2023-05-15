import CustomApiError from './custom-api';

class BadRequestError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}

export default BadRequestError;
