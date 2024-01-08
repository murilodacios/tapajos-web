import { EyeIcon, LeafIcon } from "lucide-react"
import { Button } from "../ui/button"

export const GetStarted = () => {
    return (
        <div className='p-4 flex flex-col gap-4 mt-6 pb-6' id="get-started">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl sm:text-4xl font-["Panel-Sans"] font-semibold' >Vamos começar?</h1>
                    <p className="text-lg text-gray-400">Seja para comprar créditos de carbono ou criar o seu inventário de gases, estamos aqui para o que precisar. Fale com nossos
                        especialista em descarbonização hoje mesmo.
                    </p>
                    <div>
                        <Button className="p-6 bg-green-900">
                            Falar com um especialista
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">

                    <div className="flex flex-col gap-2">
                        <EyeIcon />
                        <p className="font-bold">Compromisso com a Clareza</p>
                        <p className="text-gray-400">Na Tapajós, cada etapa de nossa operação é conduzida com clareza absoluta, sob a supervisão de entidades certificadoras, e todos os detalhes são documentados em nossa plataforma digital.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <LeafIcon />
                        <p className="font-bold">Inovação Sustentável</p>
                        <p className="text-gray-400">Na Tapajós, nos dedicamos a integrar as mais recentes inovações tecnológicas com práticas sustentáveis, garantindo não apenas a eficiência operacional, mas também a proteção do meio ambiente.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}