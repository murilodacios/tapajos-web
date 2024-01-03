
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Home, BadgeDollarSign } from 'lucide-react';


export const Sidebar = () => {
    return (
        <Card>
            <CardHeader>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Loja do Murilo</CardTitle>
                <CardDescription>Restaurante/Bares</CardDescription>
            </CardHeader>
            <CardContent>

                <div className='flex flex-col items-start gap-4'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm flex flex-row gap-2 items-center">
                            <Home size="18" />
                            Minha loja
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Configurações da loja</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Horários de funcionamento</DropdownMenuItem>
                            <DropdownMenuItem>Área de entregas</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm flex flex-row gap-2 items-center">
                            <BadgeDollarSign size="18" />
                            Financeiro
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Vendas</DropdownMenuItem>
                            <DropdownMenuItem>Formas de pagamento</DropdownMenuItem>
                            <DropdownMenuItem>Taxas</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


            </CardContent>
        </Card>
    )
}