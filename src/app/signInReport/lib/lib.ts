export async function fetchApi_past12MonthHeadCount(yyyyMMdd: string) {
  "use server";

  const body = { pastMonth: yyyyMMdd };
  const res = await fetch(
    "https://www.accessrichmond.org/o2b2/api/signIn/past12MonthHeadCount.aspx?yyyyMMdd=" +
      yyyyMMdd,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pastMonth: "5" }),
      cache: "no-store",
      mode: "no-cors",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
