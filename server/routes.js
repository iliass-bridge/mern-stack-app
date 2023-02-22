export const attachPublicRoutes = (app) => {
  app.get('/', (req, res) => res.json({message: "Welcome to my node API."}))
  app.post('/auth/register', (req, res) => res.json({message: "Register route."}))
  app.post('/auth/login', (req, res) => res.json({message: "Login route."}))
  app.get('/auth/refresh', (req, res) => res.json({message: "Refresh token route."}))
  app.get('/auth/logout', (req, res) => res.json({message: "Logout route."}))
};

export const attachPrivateRoutes = (app) => {
  app.get('/private', (req, res) => res.json({message: "This is a private route."}))
};
