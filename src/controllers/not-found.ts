import { Request, Response } from 'express';

const notFound = (req: Request, res: Response) => {
  res.status(404).json({ msg: 'Page not found' });
};

export { notFound };
