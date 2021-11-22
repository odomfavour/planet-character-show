import React, {useState} from 'react'
import { planets } from "../data";
import CreateModal from './CreateModal';
import CharacterSidebar from './CharacterSidebar';
import PlanetSidebar from './PlanetSidebar';

const Planet = () => {
    const [lgShow, setLgShow] = useState(false);
    const [sidebarShow, setsidebarShow] = useState(false);
    const handleClose = () => setLgShow(false)
    const handleShow = () => setLgShow(true);
    const openSidebar =(e, planet) => {
       setsidebarShow(true)
        console.log(planet)
        setPlanet({
            name : planet.name,
            character: planet.character,
            description : planet.description,
            population: planet.population
          })
    }
    const [planet, setPlanet] = useState({})
    const closeSidebar =() => setsidebarShow(false);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <section>
                        <div className="row">
                            {planets.map((planet) => (
                                <div className="col-md-4 mb-4" key={planet.id} onClick={(e) => openSidebar(e, planet)}>
                                    <div className="card">
                                        <img src={planet.image} className="img-fluid char-img" alt={planet.description}/>
                                        <div className="px-5 py-3">
                                            <h5>{planet.name}</h5>
                                            {/* <p>{person.friends.length} <span>friends</span></p> */}
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
                       {sidebarShow && <PlanetSidebar name={planet.name} character={planet.character} description={planet.description} population={planet.population}  closeSidebar={closeSidebar} />}
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Planet
