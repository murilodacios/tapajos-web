'use client';

import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

export const Header = () => {

    const router = usePathname()

    const url = router

    return (
        <div className='flex flex-row justify-between items-center w-full p-2'>
            <p>easy<strong>entregas</strong></p>
            <ul className='flex flex-row gap-4 text-sm'>
                <li className={`${url === "/" ? "text-slate-900" : "text-slate-500"}`}>
                    <Link href="/">
                        Painel
                    </Link>
                </li>
                <li className={`${url === "/categorias" ? "text-slate-900" : "text-slate-500"}`}>
                    <Link href="/categorias">
                        Categorias
                    </Link>
                </li>
                <li className={`${url === "/produtos" ? "text-slate-900" : "text-slate-500"}`}>
                    <Link href="/produtos">
                        Produtos
                    </Link>
                </li>
                <li className={`${url === "/clientes" ? "text-slate-900" : "text-slate-500"}`}>
                    <Link href="/clientes">
                        Clientes
                    </Link>
                </li>
                <li className={`${url === "/entregas" ? "text-slate-900" : "text-slate-500"}`}>
                    <Link href="/entregas">
                        Entregas
                    </Link>
                </li>
            </ul>
            <Button>
                Ir para a loja
            </Button>
        </div>
    )
}