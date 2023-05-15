import CustomApiError from './custom-api';

class NotFoundError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export default NotFoundError;
