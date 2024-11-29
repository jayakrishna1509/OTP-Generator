function generateOTP() {
  let otp = Math.random() * 10000;
  if (otp < 1000) {
    otp += 1000;
  }
  //   return otp;
  return Math.floor(otp);
}
console.log(generateOTP());
