import React from 'react'

import { CloseButton } from 'react-bootstrap';

const CharacterSidebar = ({name, description, friends, closeSidebar}) => {
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
                        <div className="col-md-6">
                            <p>Planet</p>
                            <p>Alpha</p>
                        </div>
                        <div className="col-md-6">
                            <p>Friends</p>
                            <p>{friends.length}</p>
                        </div>
                        </div>
                    </section>
                    <section>
                        <h5>Friends</h5>
                        <div className="scroll-object">
                        {friends.map((friend) => (
                            <div className="d-flex align-items-center mb-3" key={friend.id}>
                            <div className="me-3 image-box">
                                <img src={friend.image} className="img-fluid friend-img" alt="jelel"/>
                            </div>
                            <div className="priend-text">
                                <p>{friend.name}</p>
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

export default CharacterSidebar
