import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    root:{
        flexGrow:1,
        marginBottom:theme.spacing(10)
    },
    appBar:{
        alignItems:'center',
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h5'>
                        Expense Tracker App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
