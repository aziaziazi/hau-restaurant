import React from 'react';
import styled from 'styled-components';
import cloudinary from 'cloudinary-core';
import Slider from 'react-slick';
import ArrowDown from "./ArrowDown";

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

const createBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(1000).quality('auto:good');
  return cloudinaryCore.url(publicId, t);
};

const ImagesContainer = styled(Slider)`
  position: fixed;
  bottom: 0;
  height: ${p => p.open ? '85vh' : '15vh'};
  width: 100%;
  cursor: pointer;
  transition: height 500ms ease;
  
  .slick-list, .slick-track {
    height: 100%;
  }
`;

const StyledImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: url(${p => createBackgroundImage(p.publicId)}) no-repeat center center;
  background-size: cover;
`;

const Wrapper = styled.div`
  position: absolute;
`;

const SlideCloser = styled.div`
  position: absolute;
  width: 100vw;
  cursor: pointer;
  background-color: ${p => p.theme.colors.dark};
  opacity: ${p => p.open ? 1 : 0};
  top: ${p => p.open ? 0 : -15}vh;
  transition: opacity 500ms ease, top 500ms ease;
`;

const StyledArrowDown = styled(ArrowDown)`
  display: block;
  height: 15vh;
  margin: 0 auto;
  fill: ${p => p.theme.colors.light};
`;

class SliderS extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPicture: 0,
      sliderOpen: false,
    }
  }

  componentWillMount() {
    setInterval(this.slideToNextPicture, 3500)
  }

  slideToNextPicture = () => {
    const numberOfPictures = this.props.gallery.length;
    const nextPicture = this.state.currentPicture >= numberOfPictures - 1 ? 0 : this.state.currentPicture + 1;

    this.setState({ currentPicture: nextPicture })
  };

  toggleSlider = () => {
    this.setState({ sliderOpen: !this.state.sliderOpen })
  };

  handleClick = (e) => {
    e.stopPropagation();
    this.state.sliderOpen ? this.slideToNextPicture() : this.toggleSlider();
  };

  handleCloseSlider = () => {
    this.state.sliderOpen && this.toggleSlider();
  };

  settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  render() {
    return (
      <Wrapper>
        <SlideCloser
          onClick={this.handleCloseSlider}
          open={this.state.sliderOpen}
        >
          <StyledArrowDown />
        </SlideCloser>
        <ImagesContainer open={this.state.sliderOpen} {...this.settings}>
          {
            this.props.gallery.map((data, index) => (
              <StyledImage
                open={this.state.sliderOpen}
                onClick={e => this.handleClick(e)}
                key={data.public_id}
                publicId={data.public_id}
                isCurrent={index === this.state.currentPicture}
              />
            ))
          }
        </ImagesContainer>
      </Wrapper>
    );
  }
}

export default SliderS;
