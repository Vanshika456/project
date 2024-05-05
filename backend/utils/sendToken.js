export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJWTToken(); // token - A 2FA barrier to prevent hackers from accessing user data and corporate resources. Using passwords alone makes it easier for hackers to intercept user accounts, but with tokens, users can verify their identity through physical tokens and smartphone applications.
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // means 15 days*24 = 1 day*60min = 1 hr*60sec =1 min*1000ms mtlb 15 din m expire hojaega
    httpOnly: true,
    secure: true,// jb local host pr kam krenge to ise cmmnt krna hoga y local host pr kam ni krta 
    sameSite: "none",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
