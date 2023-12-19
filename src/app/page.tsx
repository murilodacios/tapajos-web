'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useState } from 'react';
import convert from 'xml-js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';



export default function Home() {

  const api = axios.create({
    baseURL: "https://api-consulta-sei.ib.itaborai.rj.gov.br",
  })

  const { toast } = useToast()

  const [procedimento, setProcedimento] = useState()
  const [numProcesso, setNumProcesso] = useState("")

  const consultaProcesso = async () => {
    api.post("/consultar", {
      processo: numProcesso
    }).then((response) => {
      var resultado = convert.xml2json(response.data, { compact: true, spaces: 4, sanitize: true, trim: true });

      var resultadoParse = JSON.parse(resultado)

      setProcedimento(resultadoParse)

      toast({
        title: "Processo carregado",
      })
    }).catch((err) => {
      toast({
        title: "Este processo não existe",
        variant: "destructive"
      })
    })


  }


  return (
    <main className="max-w-5xl m-auto flex flex-col items-center p-4 md:p-12 xs:p-4">

      <Toaster />

      <div className='w-full flex flex-col gap-4'>
        <p>Consulte processos abertos no Sistema Eletrônico de Informações (SEI) da Prefeitura Municipal de Itaboraí</p>
        <Input className='w-full' placeholder='Digite o número do processo com todas as pontuações' onChange={(e) => setNumProcesso(e.target.value)} />
        <Button onClick={consultaProcesso}>Consultar processo</Button>
      </div>



      {procedimento &&
        <>
          <Card className='w-full mt-4'>
            <CardHeader>
              <CardTitle>Informações do processo</CardTitle>
              <CardDescription>{procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["TipoProcedimento"]["Nome"]["_text"]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-0'>
                <p>
                  <strong>{procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["ProcedimentoFormatado"]["_text"]}</strong>
                </p>
                <p className='text-sm'>
                  {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["Especificacao"]["_text"]}
                </p>

                <div className="flex flex-row gap-2">
                  <p className='text-sm'>
                    Data de autuação:
                  </p>
                  <p className='text-sm'>
                    {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["DataAutuacao"]["_text"]}
                  </p>
                </div>

              </div>
            </CardContent>
            <CardFooter className='flex-col items-start'>

              <strong> <p>Último andamento do processo</p></strong>



              <p>
                {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["UltimoAndamento"]["DataHora"]["_text"]}
              </p>

              <p>
                {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["UltimoAndamento"]["Descricao"]["_text"]}
              </p>

              <div className='flex flex-col sm:flex-row gap-2 text-sm'>
                <p>Unidade: </p>
                <p>
                  {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["UltimoAndamento"]["Unidade"]["Descricao"]["_text"]} -
                </p>
                <p>
                  {procedimento["SOAP-ENV:Envelope"]["SOAP-ENV:Body"]["ns1:consultarProcedimentoResponse"]["parametros"]["UltimoAndamento"]["Unidade"]["Sigla"]["_text"]}
                </p>
              </div>

            </CardFooter>
          </Card>
        </>
      }


    </main>
  )
}
