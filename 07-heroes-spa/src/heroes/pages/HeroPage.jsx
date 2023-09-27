import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers/getHeroById.js";
import {MarvelPage} from "./MarvelPage.jsx";

export const HeroPage = () => {

    const navigate = useNavigate();

    const {id} = useParams()
    const heroData = getHeroById(id)

    const onNavigateBack = () => {
        navigate(-1);
      }


    if (heroData === undefined) {
        return <Navigate to={MarvelPage} replace={true}></Navigate>
    }

    const heroImageUrl = `../assets/heroes/${id}.jpg`

    return (
       <div className="row mt-5">
      <div className="col-4">
        <img
          src={ `/assets/heroes/${ id }.jpg` }
          alt={ heroData.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ heroData.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { heroData.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { heroData.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { heroData.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ heroData.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
