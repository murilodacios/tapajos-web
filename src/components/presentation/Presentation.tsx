import { CheckCircle2 } from "lucide-react"

export const Presentation = () => {
    return (
        <div className='p-4 flex flex-col items-center gap-6'>
            <h1 className='text-2xl sm:text-4xl font-["Panel-Sans"] text-center font-semibold'>Diferente de tudo<br></br> que você já viu anteriormente</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-8'>
                <div className='border-l-1 border-b-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>Feito para o hoje</p>
                    <p>Somos uma plataforma pensada para a economia do futuro</p>
                </div>

                <div className='border-l-1 border-b-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>Tecnologia do futuro</p>
                    <p>Utilizamos tecnologia Blockchain na Web3 para realizar transações</p>
                </div>

                <div className='border-l-1 border-b-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>Negócio lucrativo</p>
                    <p>Compre créditos de carbono, invista em projetos e obtenha lucro</p>
                </div>

                <div className='border-l-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>Sempre Sustentável</p>
                    <p>Todos os nossos projetos são realizadas com apoio de entidades certificadas</p>
                </div>

                <div className='border-l-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>ESG, presente.</p>
                    <p>Ambiental, Social e Governança em primeiro lugar.</p>
                </div>

                <div className='border-l-1 p-8 py-12 border-green-950 flex flex-col gap-2'>
                    <CheckCircle2 />
                    <p className='font-bold'>Ativos digitais</p>
                    <p>Nossa moeda é registrada como um ativo digital</p>
                </div>
            </div>
        </div>
    )
}