import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongoose/schemas/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";

passport.serializeUser((user, done) => {
  console.log("Inside serialize user");
  console.log(user);
  done(null, user);
});

passport.deserializeUser( async (id, done) => {
  console.log("Inside Deserializer");
  console.log(`Deserializing User ID: ${id}`);
  try {
    const findUser = await User.findById(id)
    if (!findUser) throw new Error("User not Found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy( async (username, password, done) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not found");
      if (!comparePassword(password, findUser.password)) throw new Error("Bad Credentials");
      done(null, findUser)
    } catch (err) {
      done(err, null);
    }
  })
);
