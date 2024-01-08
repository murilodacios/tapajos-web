import Image from "next/image"
import { Button } from "../ui/button"

export const Plataform = () => {
    return (
        <div className='p-4 flex flex-col gap-4 mt-6' id="plataforma">
            <h1 className='text-2xl sm:text-4xl font-["Panel-Sans"] text-center font-semibold'>Uma plataforma com <br></br>tudo o que você precisa</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-94 gap-4 mt-6'>

                <div className='rounded-2xl bg-tapajos-green-bg flex flex-col items-center md:items-end gap-2 p-8 sm:p-0'>

                    <div className='flex flex-col gap-2 items-center md:items-start p-4 md:p-12'>
                        <p className='font-bold text-xl md:text-2xl'>Acompanhe nossos projetos de descarbonização em tempo real</p>
                        <p className='text-gray-400'>Os créditos de carbono são gerados por projetos que reduzem, evitam ou capturam emissões
                            de gases de efeito estufa. Em nossa plataforma você pode acompanhar nossos projetos de descarbonização em tempo real. </p>
                        <Button className="mt-8 p-6 border-1 bg-green-950 border-green-950 hover:border-none hover:bg-green-900 hover:text-white">
                            Quero descarbonizar meu negócio
                        </Button>
                    </div>


                    <Image className='rounded-br-xl' src="/plataform-1.svg" width={500} height={150} alt="Dollar Sign" />
                </div>

                <div className='flex flex-col items-center p-8 rounded-2xl border-1 border-green-950 gap-2'>
                    <Image src="/inventario.svg" width={250} height={120} alt="Dollar Sign" />
                    <div className='flex flex-col gap-2 items-center text-center pt-4'>
                        <p className='font-bold text-xl leading-6'>Fazemos o seu inventário de gases (GEE)</p>
                        <p className='text-gray-400'>Este processo é crucial para que as empresas e organizações possam entender sua pegada de carbono e desenvolver estratégias eficazes para reduzir suas emissões.</p>
                        <Button className="mt-8 p-6 border-1 border-green-950 hover:border-none hover:bg-green-900 hover:text-white" variant="outline">
                            Quero meu inventário de gases
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}