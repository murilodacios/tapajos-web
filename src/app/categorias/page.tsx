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

import { Sidebar } from '@/components/sidebar/Sidebar';
import { Header } from '@/components/header/Header';
import { Input } from '@/components/ui/input';
import { Pen } from 'lucide-react';




export default function Categorias() {

  return (
    <main className="max-w-screen-xl m-auto flex flex-col p-4">

      <Header />

      <div className='grid grid-cols-94 gap-8 p-2'>
        <div>
          <Sidebar />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-sm'>Categorias</p>

          <div className='flex flex-row gap-4'>
            <Input placeholder='Criar nova categoria...' />
            <Button>Criar</Button>
          </div>

          <Card>
            <CardHeader>
              <div className='flex flex-row justify-between'>
                <div>
                  <CardTitle>Bebidas</CardTitle>
                  <CardDescription>Refrigerantes, sucos e água</CardDescription>
                </div>
                <Button variant="ghost">
                  <Pen size="16" />
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex flex-row justify-between'>
                <div>
                  <CardTitle>Almoço</CardTitle>
                  <CardDescription>Seu cardápio de pratos executivos</CardDescription>
                </div>
                <Button variant="ghost">
                  <Pen size="16" />
                </Button>
              </div>
            </CardHeader>
          </Card>

        </div>

      </div>




    </main>
  )
}
