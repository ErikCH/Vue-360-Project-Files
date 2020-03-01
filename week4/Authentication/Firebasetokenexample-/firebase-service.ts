import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://proj-5fd86.firebaseio.com"
});
export default admin;
