import React, { useState} from 'react'
import { characters } from "../data";
import CreateModal from './CreateModal';
import CharacterSidebar from './CharacterSidebar';
// onClick={handleClick}
const Character = () => {
    const [lgShow, setLgShow] = useState(false);
    const [sidebarShow, setsidebarShow] = useState(false);
    const handleClose = () => setLgShow(false)
    const handleShow = () => setLgShow(true);
    const openSidebar =(e, person) => {
       setsidebarShow(true)
        console.log(person)
        setPerson({
            name : person.name,
            friends: person.friends,
            description : person.description
          })
    }
    const [person, setPerson] = useState({})
    const closeSidebar =() => setsidebarShow(false);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <section>
                        <div className="row">
                            {characters.map((person) => (
                                <div className="col-md-4 mb-4" key={person.id} onClick={(e) => openSidebar(e, person)}>
                                    <div className="card">
                                        <img src={person.image} className="img-fluid char-img" alt={person.description}/>
                                        <div className="px-5 py-3">
                                            <h5>{person.name}</h5>
                                            <p>{person.friends.length} <span>friends</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-warning" onClick={handleShow}>Click</button>
                    </div>
                    <CreateModal show={lgShow} handleClose={handleClose}/>
                </div>
                <div className="col-md-3">
                    <div className="sidebar-section">
                       {sidebarShow && <CharacterSidebar name={person.name} friends={person.friends} description={person.description}  closeSidebar={closeSidebar} />}
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Character
