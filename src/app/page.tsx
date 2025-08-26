import Image from "next/image";

export default async function Home() {
  const response = await fetch(
    "https://api-colombia.com/api/v1/NativeCommunity/1"
  );
  const data = await response.json();

  return (
    <main>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>{data.languages}</p>
      {data.image && <Image src={data.image} alt="" />}
    </main>
  );
}
