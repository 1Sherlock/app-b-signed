import React, {useState} from 'react';
import Example from "../Example";
import Modal from "../Modal";

const Layer = (props) => {
    const [selected, setSelected] = useState(0);
    let slides = [
        {
            title: "Icars.<br/>Car retail service",
            desc: "AN ORIGINAL PROJECT FOR ICARS",
            link: "/projects/i-cars"
        },
        {
            title: "Khan Academy<br/> Education Org",
            desc: "AN ORIGINAL PROJECT FOR KHAN\n" +
                "ACADEMY",
            link: "/projects/khan-academy"
        },
        {
            title: "Pepsi Co <br/> Beverage company",
            desc: "AN ORIGINAL PROJECT\n" +
                "FOR PEPSI",
            link:"/projects/pepsi"
        },
        {
            title: "Slyde App <br/> Social Media Platform ",
            desc: "AN ORIGINAL PROJECT FOR Slyde",
            link: "/projects/social"
        },
        {
            title: "Icars.<br/>Car retail service",
            desc: "AN ORIGINAL PROJECT FOR ICARS",
            link: "/projects/i-cars"
        },
        {
            title: "Khan Academy<br/> Education Org",
            desc: "AN ORIGINAL PROJECT FOR KHAN\n" +
                "ACADEMY",
            link: "/projects/khan-academy"
        },
        {
            title: "Pepsi Co <br/> Beverage company",
            desc: "AN ORIGINAL PROJECT\n" +
                "FOR PEPSI",
            link:"/projects/pepsi"
        },
        {
            title: "Slyde App <br/> Social Media Platform ",
            desc: "AN ORIGINAL PROJECT FOR Slyde",
            link: "/projects/social"
        },
    ];
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <div className="project-layer">
                <h2 className="font-neue-machina-regular">Our works</h2>
                <div className="project-layer-content">
                    <div style={{width: "calc(100% - 510px)"}} className="project-layer-content-left">
                        <h3 className="font-montserrat-extra-bold" dangerouslySetInnerHTML={{__html: slides[selected].title}}/>
                        <div className="project-layer-content-info">
                            <h4 className="font-montserrat-bold">Authentic Brand <br/>
                                Engagement</h4>
                            <h5 className="font-montserrat-bold" dangerouslySetInnerHTML={{__html: slides[selected].desc}}/>
                        </div>
                    </div>
                    <div className="project-layer-content-right">
                        <Example
                            selected={selected}
                            setSelected={setSelected}
                            selectedData={slides}
                        />
                    </div>
                </div>
                <img src="/assets/images/x.svg" alt="x" className="icon-x" onClick={props.toggle}/>
            </div>
        </Modal>
    );
};

export default Layer;