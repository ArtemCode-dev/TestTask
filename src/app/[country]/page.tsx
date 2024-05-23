import { Metadata } from 'next';
import React from 'react'
import CountryBody from './parts/CountryBody';

type Props = {
    params: {
        country: string
    }
}

export async function generateMetadata({params: {country}}: Props): Promise<Metadata> {
    return {
      title: `${country}`,
    }
  }


async function page({params: {country}}: Props) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`, { next: { revalidate: 10 }});
    const data = await res.json();

    return (
        <CountryBody props={data} />
    )
}

export default page