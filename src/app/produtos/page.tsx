
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function Produtos() {

    return (
        <main className="max-w-screen-xl m-auto flex flex-col p-4">

            <Header />

            <div className='grid grid-cols-94 gap-8 p-2'>
                <div>
                    <Sidebar />
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Produtos</p>

                    <Tabs defaultValue="account" className="w-full">
                        <TabsList>
                            <TabsTrigger value="petiscos">Petiscos</TabsTrigger>
                            <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="petiscos">

                            <Card>
                                <CardHeader>
                                    <div className='flex flex-row justify-between'>
                                        <div>
                                            <CardTitle>Churrasco misto com fritas</CardTitle>
                                            <CardDescription>R$ 38,99</CardDescription>
                                        </div>
                                        <Button variant="ghost">
                                            <Pen size="16" />
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>

                        </TabsContent>
                        <TabsContent value="bebidas">

                            <Card>
                                <CardHeader>
                                    <div className='flex flex-row justify-between'>
                                        <div>
                                            <CardTitle>Coca-cola lata</CardTitle>
                                            <CardDescription>R$ 8,99</CardDescription>
                                        </div>
                                        <Button variant="ghost">
                                            <Pen size="16" />
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>

                        </TabsContent>
                    </Tabs>



                </div>

            </div>




        </main>
    )
}
