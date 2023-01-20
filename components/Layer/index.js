import React from 'react';
import Example from "../Example";
import Modal from "../Modal";

const Layer = () => {
    return (
        <Modal isOpen={true}>
            <div className="project-layer">
                <h2 className="font-neue-machina-regular">Our works</h2>
                <div className="project-layer-content">
                    <div>
                        <h3 className="font-montserrat-extra-bold">Icars. <br/>
                            Car retail service</h3>
                        <div className="project-layer-content-info">
                            <h4 className="font-montserrat-bold">Authentic Brand <br/>
                                Engagement</h4>
                            <h5 className="font-montserrat-bold">
                                AN ORIGINAL PROJECT FOR ICARS
                            </h5>
                        </div>
                    </div>
                    <div>
                        <Example/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Layer;