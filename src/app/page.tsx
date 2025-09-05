import { Pagination } from "@/components/Pagination";

export default async function Home() {
  const response = await fetch(
    "https://api-colombia.com/api/v1/NativeCommunity/pagedList?SortBy=name&SortDirection=DESC&Page=1&PageSize=5"
  );
  const data = await response.json();

  return (
    <main>
      <Pagination initialValues={data} />
    </main>
  );
}
