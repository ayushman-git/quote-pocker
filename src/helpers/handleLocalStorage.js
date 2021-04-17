export default async function handleLocalStorage(user) {
  if (user) {
    const token = await user.getIdToken(true);
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}
