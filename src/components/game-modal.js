import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import GameChart from './game-chart'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50'
    },
  },
});

export default class GameModal extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {name, players, type} = this.props;
    
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="raised" color="primary" onClick={this.handleClickOpen}>MORE</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>{name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
            <GameChart />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Return
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}
