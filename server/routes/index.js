import authRoutes from './auth.routes.js';

const configRoutes = (app) => {
  try {
    app.use("/api", authRoutes);
  } catch (error) {
    console.log(error)
  }
}

export default configRoutes;