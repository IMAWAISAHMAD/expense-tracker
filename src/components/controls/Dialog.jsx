import React from 'react'
import {Typography,Button,Dialog,DialogTitle,DialogContent,DialogContentText,Divider} from '@material-ui/core'
import PropTypes from 'prop-types';

export default function DialogForm({isOpen,setIsOpen,children,contentText,title,setEditRecord}) {
    
    const handleClose =() => {
        setEditRecord(null);
        setIsOpen(false);
    }
    
    return (
        <Dialog open={isOpen}>
            <DialogTitle>
                <div style={{display:'flex'}}> 
                    <Typography variant='h6' component='div' style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <Button 
                    variant='outlined' 
                    color='secondary' 
                    onClick={handleClose}>
                        X
                    </Button>
                </div>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    {contentText}
                </DialogContentText>
                {children}
            </DialogContent>
        </Dialog>
    )
}
Dialog.propTypes = {
children: PropTypes.array.isRequired,
isOpen:PropTypes.bool,
setIsOpen:PropTypes.func,
contentText:PropTypes.string,
title:PropTypes.string,
setEditRecord:PropTypes.func 
}

