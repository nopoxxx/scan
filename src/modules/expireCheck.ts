import logout from "./logout";

export default function expireCheck() {
  if (localStorage.getItem("accessToken") && localStorage.getItem("expire")) {
    const currentDate = new Date();
    // @ts-ignore
    const expireDate = new Date(localStorage.getItem("expire"));
    if (expireDate < currentDate) {
      logout();
    }
  }
}
