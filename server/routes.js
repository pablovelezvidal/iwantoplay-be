import cityRoutes from './api/routes/cityRoutes';
import sportRoutes from './api/routes/sportRoutes';

export default function routes(app) {
  app.use('/api/v1/cities', cityRoutes);
  app.use('/api/v1/sports', sportRoutes);
}
