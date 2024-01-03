'use client';

import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Home, BadgeDollarSign } from 'lucide-react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { OverviewHome } from '@/components/charts/OverviewHome';
import Link from 'next/link';
import { Header } from '@/components/header/Header';


export default function HomePage() {

  return (
    <main className="max-w-screen-xl m-auto flex flex-col p-4">

      <Header />

      <div className='grid grid-cols-94 gap-8 p-2'>
        <div>
          <Sidebar />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-lg'>Boa tarde, Murilo Dácio</p>
          <OverviewHome />
        </div>

      </div>




    </main>
  )
}
