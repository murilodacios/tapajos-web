
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

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { Sidebar } from '@/components/sidebar/Sidebar';
import { Header } from '@/components/header/Header';
import { Input } from '@/components/ui/input';
import { Pen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



export default function Clientes() {

    return (
        <main className="max-w-screen-xl m-auto flex flex-col p-4">

            <Header />

            <div className='grid grid-cols-94 gap-8 p-2'>
                <div>
                    <Sidebar />
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Clientes</p>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Pedidos</TableHead>
                                <TableHead className="text-right">Cliente desde</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">#0001</TableCell>
                                <TableCell>Murilo Dácio</TableCell>
                                <TableCell>45</TableCell>
                                <TableCell className="text-right">20/12/2023</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#0002</TableCell>
                                <TableCell>João Victor</TableCell>
                                <TableCell>45</TableCell>
                                <TableCell className="text-right">19/11/2023</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#0003</TableCell>
                                <TableCell>Feliciano Bradshaw</TableCell>
                                <TableCell>45</TableCell>
                                <TableCell className="text-right">15/10/2023</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>




                </div>

            </div>




        </main>
    )
}
