import React, { useState } from 'react';
import { Paper, Popper, Grow, ClickAwayListener, MenuList } from '@material-ui/core';
import { Delete, Visibility, Star, StarBorder } from '@material-ui/icons';
import Item from './Item/Item';
import Alert from '../../../../../parts/Alert/Alert';

const ContextMenu = (props) => {
  const { anchorRef, open, onClose, favorite, toggleFavorite, onDelete } = props;

  const [deleteAlert, setDeleteAlert] = useState(false);

  const deleteHandler = () => {
    setDeleteAlert(true);
  };

  const deleteAlertHandler = (result) => {
    if (result) onDelete();
    setDeleteAlert(false);
  };

  return (
    <>
      <Popper open={open} anchorEl={anchorRef.current} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={onClose}>
                <MenuList>
                  <Item icon={Visibility} text="View aside" onClick={onClose} />
                  {favorite ? (
                    <Item icon={StarBorder} text="Unfollow" onClick={toggleFavorite} />
                  ) : (
                    <Item icon={Star} text="Follow" onClick={toggleFavorite} />
                  )}
                  <Item variant="delete" icon={Delete} text="Delete" onClick={deleteHandler} />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Alert
        open={deleteAlert}
        onClose={deleteAlertHandler}
        title="Do you want to delete test result?"
        message="Once deleted, test results cannot be restored."
      />
    </>
  );
};

export default ContextMenu;
