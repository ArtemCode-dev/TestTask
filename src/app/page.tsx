import Country from "@/components/Country/Country";

export async function generateStaticParams() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capitals', { next: { revalidate: 20 }});
    const countries = await res.json();
    return countries;
  } catch(e) {
    return 'error'
  }
}

export default async function Home() {
  const countriesData:any = await generateStaticParams()
  return (
    <main className="p-[20px]">
      <h1 className="text-h1 font-bold">Тестовое задание – React Developer</h1>
      <p className="text-p1 font-bold">Список стран</p>
      <div className="flex gap-3 flex-col">
        {countriesData.map((country:any) => (
          <Country props={country}/>
        ))}
      </div>
    </main>
  );
}
