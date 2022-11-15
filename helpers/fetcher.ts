export async function fetcher(data, url, type) {
  if (type === "POST") {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-Type": "application/json" },
    });
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}
