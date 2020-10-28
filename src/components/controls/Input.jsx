import React from 'react'
import {TextField} from '@material-ui/core'

export default function Input({name,label,value,onChange,type,color,variant,error=null}) {
    return (
        <TextField
            name={name}
            label={label}
            type={type}
            color={'primary'||{color}}
            variant={'standard'||variant}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
