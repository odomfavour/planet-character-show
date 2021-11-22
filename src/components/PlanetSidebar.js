import React from 'react'
import { CloseButton } from 'react-bootstrap'

const PlanetSidebar = ({name, description, character, population, closeSidebar}) => {
    return (
        <div>
            <div className="sidebar">
                <div className="card p-3">
                    <div className="d-flex justify-content-end">
                        <CloseButton onClick={closeSidebar} />
                    </div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <section>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="mb-0">Population</p>
                                <p className="fw-bold">{population}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Friends</h5>
                            <button>+</button>
                        </div>
                        <div className="scroll-object">
                        {character.map((character) => (
                            <div className="d-flex align-items-center mb-3" key={character.id}>
                            <div className="me-3 image-box">
                                <img src={character.image} className="img-fluid friend-img" alt="jelel"/>
                            </div>
                            <div className="priend-text">
                                <p>{character.name}</p>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..</p>
                            </div>
                        </div>
                        ))}
                        </div>                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PlanetSidebar
