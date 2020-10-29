import React from 'react'
import { Snackbar,makeStyles } from '@material-ui/core';
import { Alert,AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme=>({
    root:{
        marginTop:theme.spacing(6)
    }
}))

export default function Notification({notify,setNotify}) {
    const classes = useStyles();
    const handleClose = () => {
        setNotify({
            ...notify,
            isOpen:false
        });
    }
    return (
        <Snackbar className={classes.root} open={notify.isOpen} anchorOrigin={{vertical:'top',horizontal:'right'}} autoHideDuration={3000}  onClose={handleClose}>
            <Alert onClose={handleClose} severity={notify.type}>
                <AlertTitle>
                    {notify.title}
                </AlertTitle>
              {notify.message}  
            </Alert>
        </Snackbar>
    )
}
