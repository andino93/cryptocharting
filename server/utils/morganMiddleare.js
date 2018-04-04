import {} from 'dotenv/config';
import morgan from 'morgan';

const mountMorganMiddleware = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};

export default mountMorganMiddleware;
