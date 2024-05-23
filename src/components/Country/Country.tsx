'use client'

import React, { useEffect } from 'react'
import s from './Country.module.scss'
import { ICountry } from '@/types/Country'
import Link from 'next/link'

type Props = {
    props: ICountry
}

function Country({props}: Props) {
    useEffect(() => {
        console.log(props)
    }, [])
  return (
    <Link href={props.name.common.toLowerCase()} className={s.card}>
        <img className='rounded-[50%] w-[50px] h-[50px] object-cover' src={props.flags.png} alt={props.flags.alt} />
        <p>{props.name.common}</p>
    </Link>
  )
}

export default Country