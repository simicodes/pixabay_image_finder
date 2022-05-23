import React, { Component } from "react";
import propTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
class ImageResult extends Component {
  //state
  state = {
    open: false,
    currentImg: "",
  };
  //handle open
  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };

  //handle close
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map((img) => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />,
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} style={{ width: "100%" }} alt="" />
        </Dialog>
      </div>
    );
  }
}

ImageResult.propTypes = {
  images: propTypes.array.isRequired,
};
export default ImageResult;
