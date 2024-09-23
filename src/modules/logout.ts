export default function logout() {
  localStorage.removeItem("expire");
  localStorage.removeItem("accessToken");
  window.location.reload();
}
