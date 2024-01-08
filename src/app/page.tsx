'use client';

import Link from 'next/link';
import { Header } from '@/components/header/Header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { CheckCircle2 } from 'lucide-react';
import { Hero } from '@/components/hero/Hero';
import { Presentation } from '@/components/presentation/Presentation';
import { Products } from '@/components/products/Products';
import { Plataform } from '@/components/plataform/Plataform';
import { GetStarted } from '@/components/get-started/GetStarted';


export default function HomePage() {

  return (
    <>
      <Header />
      <main className="bg-tapajos-black text-white">

        <div className="max-w-screen-lg m-auto">

          <Hero />
          <Presentation />
          <Products />
          <Plataform />
          <GetStarted />

        </div>

      </main>
    </>

  )
}
