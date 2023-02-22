const cookieOptions = {
  httpOnly: true,
  sameSite: 'None',
  // TODO: uncomment for production
  secure: true,
  maxAge: 24 * 60 * 60 * 1000,
};

export default cookieOptions;
