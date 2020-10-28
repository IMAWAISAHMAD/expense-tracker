import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    root:{
        '& .MuiFormControl-root':{
            minWidth:'80%',
            margin: theme.spacing(1)
        }
        }

}))

export const useForm = (initialFieldValues,validateOnChange=false,validate) =>{

    const[values,setValues] = useState(initialFieldValues);
    const [errors,setErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
            setValues({
                ...values,
                [name]:value
            })

        if(validateOnChange){
            validate({
                [name]:value
            })
        }
    };


    const handleReset = () => {
        setValues(initialFieldValues);
        setErrors({});
    }


    return({
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        handleReset,
    })
}

export const Form = ({children,handleSubmit}) => {
    const classes = useStyles()
    return(
        <form className={classes.root} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}