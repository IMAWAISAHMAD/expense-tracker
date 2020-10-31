import React,{useContext} from 'react'
import {Grid,makeStyles,Typography,Card,CardContent} from '@material-ui/core'
import {AppContext} from '../context/AppContext'

const useStyles = makeStyles(theme=>({
    root: {
     margin:theme.spacing(5)
    },
}))



export default function Balance() {
    const classes = useStyles();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const {transactions} = useContext(AppContext);
    const income = transactions.filter(transaction=>transaction.type==='income').map(transaction => parseInt(transaction.amount)).reduce(reducer,0);
    const expense = transactions.filter(transaction=>transaction.type==='expense').map(transaction => parseInt(transaction.amount)).reduce(reducer,0);
    const balance = income-expense;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h5' color='primary'>
                            INCOME
                        </Typography>
                        <Typography variant='h3'>
                           {income.toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h5' color='secondary'>
                            EXPENSE
                        </Typography>
                        <Typography variant='h3'>
                           {expense.toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h5' color='textPrimary'>
                            BALANCE
                        </Typography>
                        <Typography variant='h3'>
                           {balance.toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
    )
}
