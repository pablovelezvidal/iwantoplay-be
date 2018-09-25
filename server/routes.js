import cityRoutes from './api/routes/cityRoutes';

export default function routes(app) {
  app.use('/api/v1/cities', cityRoutes);
}
