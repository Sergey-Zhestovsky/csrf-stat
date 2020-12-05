import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const Alert = (props) => {
  const { open, onClose = () => {}, title, message } = props;

  return (
    <Dialog open={open} onClose={onClose.bind(null, false)}>
      <DialogTitle>{title}</DialogTitle>

      {message && (
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={onClose.bind(null, false)} color="default">
          Cancel
        </Button>
        <Button onClick={onClose.bind(null, true)} variant="contained" color="secondary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
