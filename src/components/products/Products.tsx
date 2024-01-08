import Image from "next/image"
import { Button } from "../ui/button"

export const Products = () => {
    return (
        <div className='p-4 flex flex-col gap-4' id="produtos">

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-94 gap-4'>
                <div className='p-6 md:p-12 rounded-2xl border-1 border-green-950 flex flex-col items-center gap-4'>

                    <Image src="/esg.svg" width={450} height={150} alt="Dollar Sign" />
                    <div className='flex flex-row gap-2 flex-wrap sm:gap-4'>
                        <p className='border-1 border-green-950 px-2 py-1 rounded-xl'>Ambiental</p>
                        <p className='border-1 border-green-950 px-2 py-1 rounded-xl'>Social</p>
                        <p className='border-1 border-green-950 px-2 py-1 rounded-xl'>Governança</p>
                    </div>

                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='font-bold text-xl'>Implemente práticas ESG com facilidade</p>
                        <p className='text-gray-400'>Com a nossa expertise, tornamos o processo de obtenção de certificados ESG não apenas viável, mas também enriquecedor
                            para a sua empresa. Entendemos que cada negócio é único, e por isso, oferecemos soluções personalizadas que refletem os
                            valores e objetivos específicos da sua empresa.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center p-6 md:p-8 rounded-2xl border-1 border-green-950 gap-2'>
                    <Image src="/wallet.svg" width={250} height={120} alt="Dollar Sign" />
                    <div className='flex flex-col gap-2 items-center text-center pt-4'>
                        <p className='font-bold text-xl leading-6'>Compre créditos de carbono</p>
                        <p className='text-gray-400'>Com menos de 3 cliques você pode comprar créditos de carbono verificados direto em nossa plataforma</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-4 p-6 md:p-12'>
                <p className='text-xl sm:text-2xl text-center font-medium'>Descarbonize sua empresa conosco. Oferecemos soluções especializadas para inventário e redução de gases de efeito estufa, guiando sua jornada rumo à sustentabilidade</p>
                <div className='flex flex-col items-center'>
                    <Button className="p-6 border-1 border-green-950 hover:border-none hover:bg-green-900 hover:text-white" variant="outline">
                        Quero descarbonizar minha empresa
                    </Button>
                </div>

            </div>

            <div className="rounded-xl border-1 border-green-950 flex flex-col md:flex-row items-center">
                <Image className="rounded-xl" src="/earth.jpg" width={400} height={400} alt="Terra" />
                <div className="p-12">
                    <h1 className='text-lg md:text-2xl font-["Panel-Sans"] leading-8'>A descarbonização reduz custos de energia, melhora a reputação, aumenta a competitividade e atrai investidores conscientes, sendo fundamental para o sucesso sustentável das empresas.</h1>
                </div>
            </div>

        </div>
    )
}