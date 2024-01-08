

import Image from "next/image"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";

export const Hero = () => {

    const [scrollY, setScrollY] = useState(0);


    if (typeof document !== 'undefined') {
        document.addEventListener("scroll", (event) => {
            setScrollY(window.scrollY)
            console.log(scrollY)
        })
    }

    

    return (
        <div className='flex flex-col justify-between items-center w-full p-4 pt-12 gap-4'>
            <p className=" text-white text-sm px-4 py-1 border-1 rounded-xl border-green-950">Acompanhe nossas redes sociais</p>
            <h1 className='text-4xl sm:text-6xl text-center leading-slug font-["Panel-Sans"] font-semibold'>Finalmente, a primeira <br></br>ecofintech do Brasil.</h1>
            <p className='text-center leading-1'>
                Ajudamos o seu negócio a investir em projetos de descarbonização<br></br> que geram créditos de carbono tokenizados em Blockchain na Web3.
            </p>

            <div className='flex flex-col sm:flex-row gap-2'>
                <Button className="p-6 bg-green-900">
                    Quero compensar minhas emissões
                </Button>

                <Button variant="outline" className="p-6 border-1 border-green-950 hover:border-none hover:bg-green-900 hover:text-white">
                    Saiba mais
                </Button>
            </div>

            <Image src="/plataform.svg" width={1400} height={100} alt="Plataforma" className={`mt-4 sm:mt-12 ${scrollY > 100 ? 'animate-slow delay-2000' : ''} `} />

            <div className='bg-green-300 opacity-5 w-96 h-96 blur-3xl absolute top-0 z-10' />
        </div>
    )
}