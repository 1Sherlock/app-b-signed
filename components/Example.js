import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";

let slides = [
    {
        key: 1,
        content: "i-cars.png"
    },
    {
        key: 2,
        content: "khan.png"
    },
    {
        key: 3,
        content: "pepsi.png"
    },
    {
        key: 4,
        content: "slide.png"
    },
    {
        key: 5,
        content: "i-cars.png"
    },
    {
        key: 6,
        content: "khan.png"
    },
    {
        key: 7,
        content: "pepsi.png"
    },
    {
        key: 8,
        content: "slide.png"
    },
];

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
    };

    // onChangeInput = e => {
    //   this.setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //   });
    // };

    render() {
        function handleTouchStart(e) {
            this.setState({touchStart: e.targetTouches[0].clientY});
        }

        function handleTouchMove(e) {
            this.setState({touchEnd: e.targetTouches[0].clientY});
        }

        function handleTouchEnd() {
            const nimadir = this;
            if (this.touchStart - this.touchEnd > 150) {
                nimadir.moveSlide(1)
            }

            if (this.touchStart - this.touchEnd < -150) {
                nimadir.moveSlide(-1);
            }
        }

        return (
            <div
                onTouchStart={() => console.log("started")}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // width: "100vw",
                    // height: "100vh",
                    // margin: "0 auto",
                    width: "510px",
                    height: "600px",
                    maxWidth: "90%",
                    // background: "#7FfFbF"
                }}
                className="layer-mobile"
            >
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    selected={this.props.selected}
                    setSelected={this.props.setSelected}
                    selectedData={this.props.selectedData}
                />
            </div>
        );
    }
}
