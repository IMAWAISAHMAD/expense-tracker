import React from 'react'
import {Typography,Button,Dialog,DialogTitle,DialogContent,DialogContentText,Divider} from '@material-ui/core'

export default function DialogForm({isOpen,setIsOpen,children,contentText,title}) {
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
                    onClick={()=>setIsOpen(false)}>
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
