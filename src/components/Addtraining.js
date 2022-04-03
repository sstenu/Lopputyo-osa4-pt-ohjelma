import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addtraining(props){
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '', duration: '', activity: '',  customer: props.customer.links[0].href
    })

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    }

    const addTraining = () => {
        props.saveTraining(training);
        handleClose();
    }

    return(
        <div>
            <Button onClick={handleClickOpen}>
               Add training
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="date"
                        value={training.date}
                        label="Date"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        label="Duration"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                  
                    />
                     <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        label="Activity"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addTraining}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}