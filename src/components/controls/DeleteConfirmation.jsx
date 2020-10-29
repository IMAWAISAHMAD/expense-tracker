import React from 'react'
import {Dialog,DialogContent,DialogTitle,DialogActions,Typography,IconButton,makeStyles} from '@material-ui/core'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import Button from './Button'


const useStyles = makeStyles(theme=>({
    root:{
        textAlign:'center'
    },
   titleIcon:{
    backgroundColor:theme.palette.secondary.light,
    color:theme.palette.secondary.main,
    '&:hover':{
        backgroundColor:theme.palette.secondary.light, 
        cursor:'default'  
    },
    '& .MuiSvgIcon-root':{
        fontSize:'8rem'
    }

    }
}))
export default function DeleteConfirmation({confirmDialog,setConfirmDialog}) {
    const classes = useStyles();
    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle className={classes.root}>
               <IconButton className={classes.titleIcon}>
                    <NotListedLocationIcon/>
               </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h6' color='secondary'>
                   {confirmDialog.title} 
                </Typography>
                <Typography variant='subtitle2' color='secondary'>
                   {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    size='medium'
                    color='secondary'
                    variant='outlined'
                    text='No'
                    onClick={()=>setConfirmDialog({...confirmDialog,isOpen:false})}
                />
                <Button
                    size='medium'
                    color='secondary'
                    variant='outlined'
                    text='Yes'
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}
