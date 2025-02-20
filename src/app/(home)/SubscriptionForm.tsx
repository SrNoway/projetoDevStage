'use client'
import { Button } from "@/components/Button";
import { InputRoot, InputIcon, InputField } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'

const subscriptionSchema = z.object(
    {
        name: z.string().min(2, 'Digite seu nome completo'),
        email: z.string().email('Digite um e-mail válido'),
    }
)



export function SubscriptionForm() {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(subscriptionSchema),
    })


    function onSubscribe(data: any) {
        console.log(data)

    }


    return (
        <form
            onSubmit={handleSubmit(onSubscribe)}
            className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]'>
            <h2 className='font-headind font-semibold text-gray-200 text-xl'>Inscrição</h2>

            <div className='space-y-3'>
                <InputRoot>
                    <InputIcon>
                        <User />
                    </InputIcon>
                    <InputField
                        type='text'
                        placeholder='Nome completo'
                        {...register('name')}
                    />
                </InputRoot>

                <InputRoot>
                    <InputIcon>
                        <Mail />
                    </InputIcon>
                    <InputField
                        type='email'
                        placeholder='E-mail'
                        {...register('email')}
                    />
                </InputRoot>
            </div>

            <Button type='submit'>
                Confirmar
                <ArrowRight />
            </Button>

        </form>
    )
}
