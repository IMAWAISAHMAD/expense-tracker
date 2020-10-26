import React,{useContext,useState,useEffect} from 'react'
import {Button,Grid,FormControl,InputLabel,Select,MenuItem,TextField,FormHelperText,makeStyles,Divider} from '@material-ui/core'
import {AppContext} from '../context/AppContext'
import Balance from './Balance'
import DialogForm from './DialogForm'
import Transaction from './Transaction'
import AddCircleIcon from '@material-ui/icons/AddCircle'


const useStyles = makeStyles((theme) => ({
    formControl:{
        margin: theme.spacing(1),
        minWidth: 350,
    }
}) )


 export default function Transactions() {
    const classes = useStyles();
    const {transactions,addTransaction,deleteTransaction,updateTransaction} = useContext(AppContext);
    const [editRecord,setEditRecord] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    const [values,setValues] = useState({
        id:0,
        date:'',
        type:'',
        desc:'',
        amount:''
    })
    const [errors,setErrors] = useState({});
    const [validateOnChange,setValidateOnChange] = useState(false);

    const validate = (fieldValues=values) => {
        const temp={...errors};
        if('date' in fieldValues)
            temp.date = fieldValues.date ?'':'Date is required';
        if('type' in fieldValues)    
            temp.type = fieldValues.type.length !==0 ?'':'Transaction Type is required';
        if('desc' in fieldValues)    
           temp.desc = fieldValues.desc.length>=5 ?'':'Description is required and must be minimum five cracters';
        if('amount' in fieldValues)     
            temp.amount = fieldValues.amount ?'':'Amount is required';

        setErrors({
            ...temp
        })
        console.log(errors);
        if(fieldValues===values)
        return Object.values(temp).every(x => x === "");
    }



    const handleChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        
        const transaction = values;
        setValidateOnChange(true);
        if(transaction.id===0){
            const newTransaction = {
                id:transactions.length+1,
                date:transaction.date,
                type:transaction.type,
                desc:transaction.desc,
                amount:transaction.amount
            }
            if(validate()){    
                addTransaction(newTransaction)
                setIsOpen(false);
            }   
        }
        else
        {
            updateTransaction(transaction)
            setIsOpen(false);
            console.log('Edit transaction called')
        }

        setEditRecord(null);   
        handleReset(); 
       
    }

    const recordForEdit = (transaction) => {
      setEditRecord(transaction);
      setIsOpen(true);
    } 

    const handleReset = () => {
        setValues({
            id:0,
            date:'',
            type:'',
            desc:'',
            amount:''
        });
    }
    
    useEffect(()=>{
        if(editRecord!=null){
            setValues({
                ...editRecord
            });
        }
    },[editRecord, setValues])

    return (
        <div style={{textAlign:'center'}}>
            <Grid container>
                <Grid item  xs={12} sm={12} md={12}>
                    <Balance/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button variant='outlined' color='primary' onClick={()=>setIsOpen(true)} startIcon={<AddCircleIcon/>}>
                          Add Transaction
                    </Button>
                    <DialogForm
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            title='Add Transaction'
                            contentText='Enter Transaction Details'
                        >
                        <FormControl className={classes.formControl}  {...(errors.type && {error:true})}>
                        <InputLabel id="type">Transaction Type</InputLabel>
                        <Select
                        labelId='type'
                        id='type'
                        name='type'
                        value={values.type}
                        onChange={handleChange}
                        label="Transaction Type"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'income'}>Income</MenuItem>
                        <MenuItem value={'expense'}>Expense</MenuItem>
                        </Select>
                        {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
                        </FormControl>
                        <br/>
                        <FormControl  className={classes.formControl} >   
                        <TextField
                        name='date'
                        type='date'
                        color='primary'
                        value={values.date}
                        onChange={handleChange}
                        {...(errors.date && {error:true,helperText:errors.date})}
                        
                        />
                        </FormControl>
                        <br/>
                        <FormControl  className={classes.formControl} error={validateOnChange}>   
                            <TextField
                            name='desc'
                            color='primary'
                            type='text'
                            value={values.desc}
                            label='Description'
                            onChange={handleChange}
                            {...(errors.desc && {error:true,helperText:errors.desc})}
                            />
                        </FormControl>
                        <br/>
                        <FormControl  className={classes.formControl}>   
                            <TextField
                            name='amount'
                            type='number'
                            color='primary'
                            value={values.amount}
                            label='Amount'
                            onChange={handleChange}
                            {...(errors.amount && {error:true,helperText:errors.amount})}
                            //helperText={errors.amount}
                            />
                        </FormControl>  
                        <br/>
                        <br/>
                        <Button variant='outlined' color='primary' onClick={handleSubmit}>Submit</Button>
                        <Button variant='outlined' color='primary' onClick={handleReset}>Reset</Button>
                        </DialogForm>
                </Grid>
                <Grid item  xs={12} sm={12} md={12}>
                    {transactions.length>0 &&
                        transactions.map(transaction=>(
                            <Transaction key={transaction.id} transaction={transaction} id={transaction.id} deleteTransaction={deleteTransaction} handleEdit={recordForEdit}/>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}
