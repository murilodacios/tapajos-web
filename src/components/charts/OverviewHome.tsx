import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Button } from '@/components/ui/button'

export const OverviewHome = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <Card>
                <CardHeader>
                    <CardTitle>Resumo do dia</CardTitle>
                    <CardDescription>Valor total das vendas de hoje</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-2xl font-bold	'>R$ 3345,98</p>

                </CardContent>
                <CardFooter>
                    <Button variant="outline">Ir para o financeiro</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Total de entregas</CardTitle>
                    <CardDescription>Total de entregas realizadas</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-2xl font-bold'>33</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Total de clientes</CardTitle>
                    <CardDescription>Total de clientes até hoje</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-2xl font-bold'>120</p>
                </CardContent>
            </Card>
        </div>
    )
}