'use client'
import { IconButton } from '@/components/IconButton'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Copy, Link } from 'lucide-react'
import React from 'react'

interface InviteLinkInputProps{
    inviteLink : string
}

export function InviteLink({inviteLink}: InviteLinkInputProps) {
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)

    }
    return (
        <InputRoot>
            <InputIcon>
                <Link className='size-5' />
            </InputIcon>
            <InputField readOnly defaultValue={inviteLink}
            />

            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5' />
            </IconButton>

        </InputRoot>
    )
}
