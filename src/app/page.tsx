import { CommunityCard } from "@/components/CommunityCard";
import { Community } from "@/types/types";

export default async function Home() {
  const response = await fetch(
    "https://api-colombia.com/api/v1/NativeCommunity/pagedList?SortBy=name&SortDirection=DESC&Page=1&PageSize=5"
  );
  const { data } = await response.json();

  return (
    <main>
      {data.map((community: Community, index: number) => (
        <div key={community.id}>
          <CommunityCard community={community} />
          {index < data.length - 1 && <hr />}
        </div>
      ))}
    </main>
  );
}
