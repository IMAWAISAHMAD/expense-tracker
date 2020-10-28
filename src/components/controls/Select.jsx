import React from 'react'
import {FormControl,FormHelperText,InputLabel,Select as MuiSelect,MenuItem} from '@material-ui/core'

export default function Select({label,name,variant,value,options,onChange,error}) {
    return (
        <FormControl variant={variant} {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                options.map(option=>(
                <MenuItem key={option.id} value={option.value}>{option.name}</MenuItem>        
                ))
            }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
