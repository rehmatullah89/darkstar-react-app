"use client";

interface Cookie {
  name?: string;
  value?: string;
  // Add any other properties you expect on a cookie
}

//** Localstorage Helpers */
// export function getLocalStorage(key: string, defaultValue: any) {
//   const stickyValue = localStorage.getItem(key);

//   return stickyValue !== null && stickyValue !== "undefined"
//     ? JSON.parse(stickyValue)
//     : defaultValue;
// }

export function getLocalStorage(key, defaultValue) {
  if (typeof window !== "undefined") {
    const stickyValue = localStorage.getItem(key);

    return stickyValue && stickyValue != null && stickyValue !== "undefined" && stickyValue != ""
      ? JSON.parse(stickyValue)
      : defaultValue;
  }
  return defaultValue;
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}
//** Cookie Helpers */
export const setCookie = (
  name: string,
  value: string | number,
  expDays: number
) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;

  // Set the cookie with SameSite attribute, expiration, path, and secure flag
  document.cookie = `${name}=${value};SameSite=None;${expires};path=/;secure`;
};
export function cookieExists(name: string) {
  return document.cookie.split(";").some((c) => {
    return c.trim().startsWith(name + "=");
  });
}

/**
 * Gets the value of a cookie by its name.
 *
 * @param {string} cName - The name of the cookie.
 * @returns {string} - The value of the cookie, or an empty string if not found.
 */
export function getCookie(cName: string) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export const cookiesObjectToString = (
  cookiesObject: Record<string, Cookie | undefined>
): string => {
  return Object.entries(cookiesObject)
    .map(([key, cookie]) => {
      if (cookie) {
        const cookieName = cookie.name || "";
        const cookieValue = cookie.value || "";
        return `${encodeURIComponent(cookieName)}=${encodeURIComponent(
          cookieValue
        )}`;
      } else {
        // Handle the case when the cookie is undefined (if needed)
        return "";
      }
    })
    .filter((cookieString) => cookieString !== "") // Remove undefined cookies from the result
    .join("; ");
};
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}