import React,{useState} from 'react'
import {Grid,makeStyles,Divider,List,ListItem,ListItemAvatar,Avatar,ListItemSecondaryAction,ListItemText,IconButton} from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import DeleteCofirmation from './controls/DeleteConfirmation';

const useStyles = makeStyles(theme=>({
    root:{
        flexGrow:1,
        width: '100%',
        maxWidth: 750,
        margin:'auto', 
    }
}))



export default function Transaction({id,transaction,deleteTransaction,handleEdit,setNotify}) {
    const classes = useStyles();
    const [confirmDialog,setConfirmDialog] = useState({isOpen:false,title:'',subTitle:'',})

    const handleDelete = (id) => {
        setConfirmDialog({
            isOpen:true,
            title:'Are you sure you want to delete this transaction',
            subTitle:'This can not be Undo',
            onConfirm:()=>{
                deleteTransaction(id)
                setNotify({
                    isOpen:true,
                    type:'error',
                    title:'Transaction',
                    message:'Transaction Deleted Successfully' 
                 })
            }
        })
       
    }
    return (
    <div className={classes.root}>
        <List key={id} dense > 
            <ListItem>
            <Grid container>
                <Grid item md={2}>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountBalanceWalletIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </Grid>
                <Grid item md={8} >
                <ListItemText>
                <Grid container spacing={10}>
                        <Grid item>
                            {transaction.date}
                        </Grid>
                        <Grid item>
                            {transaction.type}
                        </Grid>
                        <Grid item>
                            {transaction.desc}
                        </Grid>
                        <Grid item>
                            {transaction.amount}
                        </Grid>
                    </Grid>
                </ListItemText>
                </Grid>
                <Grid item md={2}>
                <ListItemSecondaryAction>
                    <IconButton
                    onClick={()=>handleEdit(transaction)}
                    >
                        <EditIcon/>
                    </IconButton>
                    <IconButton
                     onClick={()=>handleDelete(id)}
                    >
                        <DeleteForeverIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
                </Grid>
            </Grid>
            </ListItem>
            <Divider/>
        </List>
        <DeleteCofirmation
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        />
    </div>
    )
}


