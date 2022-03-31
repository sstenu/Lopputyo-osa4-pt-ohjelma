import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { duration } from 'moment';

export default function Edittrainig(props){
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
     date: '', duration: '',  activity: ''
    })

    const handleClickOpen = () => {
        console.log(props.training);
        setTraining({date: props.training.date,
            duration: props.training.duration,
            activity: props.training.activity,
        });
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    }

    const updateTraining = () => {
        props.updateTraining(training, props.training.links[0].href);
        handleClose();
    }

    return(
        <div>
            <Button onClick={handleClickOpen}>
               Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit trainingr</DialogTitle>
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
                    <Button onClick={updateTraining}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}