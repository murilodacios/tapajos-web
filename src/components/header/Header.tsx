'use client';

import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image";

export const Header = () => {


    return (
        <header className="bg-tapajos-black text-white">
            <div className="max-w-screen-xl m-auto flex flex-row justify-between items-center w-full p-4">
                <Image src="/logo.svg" width={120} height={10} alt="Tapajós Carbon Credits" />
                <ul className='hidden md:flex flex-row gap-6 text-sm border-1 p-2 px-8 rounded-xl border-green-950 z-20'>

                    <li>
                        <Link href="/#produtos">
                            Produtos
                        </Link>
                    </li>

                    <li>
                        <Link href="/#plataforma">
                            Plataforma
                        </Link>
                    </li>

                    <li>
                        <Link href="/#sobre">
                            Sobre
                        </Link>
                    </li>

                    <li>
                        <Link href="/#blog">
                            Blog
                        </Link>
                    </li>

                </ul>
                <div className="hidden sm:flex flex-row gap-4 items-center">
                    <Link href="/" className="text-sm">
                        Entrar
                    </Link>
                    <Button className="bg-green-900">
                        Cadastre-se
                    </Button>
                </div>
            </div>
        </header>
    )
}