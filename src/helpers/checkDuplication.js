import { db } from "@/auth/firebase";

export default async function(id) {
  try {
    const data = await db
      .collection("quotes")
      .where("_id", "==", id)
      .get();
    if (data.docs.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error getting documents: ", error);
    return false;
  }
}
