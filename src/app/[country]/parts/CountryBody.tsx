'use client'

import React, { useEffect } from 'react'
import s from './CountryBody.module.scss'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    props:any
}

function CountryBody({props}: Props) {
    useEffect(() => {
        console.log(props)
    }, [])
    const country = props[0]
  return (
    <div className={s.country}>
        <Link href={'/'} className='text-p1 font-bold'>{'Back'}</Link>
        <div className='flex gap-[20px] pt-[20px]'>
            <h2 className='text-h2 font-bold'>{country.name.common}</h2>
            <img className='rounded-[50%] object-cover w-[50px] h-[50px]' src={country.flags.png} alt={country.flags.alt} />
        </div>
        <div className={s.body}>
            <div className={s.lable}>
                <p>region: {country.region}</p>
            </div>
            <div className={s.lable}>
                <p>subregion: {country.subregion}</p>
            </div>
            <div className={s.lable}>
                <p>continents: {country.continents.map((continent:any) => (
                    <span>{continent}</span>
                ))}</p>
            </div>
            <div className={s.lable}>
                <p>capital: {country.capital}</p>
            </div>
        </div>
    </div>
  )
}

export default CountryBody