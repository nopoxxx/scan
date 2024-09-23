export default async function auth(
  login: string,
  password: string,
): Promise<boolean> {
  let response = await fetch(
    "https://gateway.scan-interfax.ru/api/v1/account/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    },
  );

  let result = await response.json();
  console.log(result);

  if (!result.errorCode) {
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("expire", result.expire);
    window.location.reload();
    return true;
  } else {
    return false;
  }
}
