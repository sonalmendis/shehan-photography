import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const PhotoTiledLayoutStyled = styled.div`
  position: relative;
  picture img {
    width: 100%;
    border-radius: 2em;
  }

  .image-container {
    margin-bottom: 1em;
  }
  @media ${GlobalVariables.device.landscape} {
    display: flex;
    height: 124vh;
    justify-content: space-between;
    align-items: center;

    img {
      height: 100%;
      margin-top: 0;
      object-fit: cover;
    }
    picture {
      display: block;
    }
    > .image-container {
      height: 100%;
      flex: 1 1 50%;
      order: 1;
      margin-right: 2em;

      picture {
        height: 100%;
      }
      img {
      }
    }
    .left-column-desktop {
      display: flex;
      order: 2;
      flex-direction: column;
      height: 100%;
      flex: 0 1 39%;

      .image-container:first-of-type {
        height: 57%;

        picture {
          height: 100%;
        }
        img {
          border-radius: 3em;
        }
      }
      .image-container:last-of-type {
        margin-top: 2em;
        flex: 1 1 auto;
        picture {
          height: 100%;
        }
        img {
          border-radius: 3em;
        }
      }
    }
  }
  .image-container.desktop-visible {
    /* display: none; */
    @media ${GlobalVariables.device.landscape} {
      /* display: block; */
    }
  }
`;

const PhotoTiledLayout = (props) => {
  return (
    <div>
      <PhotoTiledLayoutStyled className={`colors-container ${props.className}`}>
        {props.children}
      </PhotoTiledLayoutStyled>
    </div>
  );
};

export default PhotoTiledLayout;
