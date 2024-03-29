import { Header } from '../../Components/header/header.jsx'
import { Slider } from '../../Components/Carrousel/Carrousel.jsx';
import { Title } from '../../Components/Title/title.jsx';
import { Location } from '../../Components/Location/location.jsx';
import { Tags } from '../../Components/Tag/tag.jsx';
import { Hosts } from '../../Components/Host/host.jsx';
import { Rating } from '../../Components/Rating/rating.jsx';
import { Collapse } from '../../Components/Collapse/collapse.jsx';
import { Footer } from '../../Components/footer/footer.jsx'
import { useParams, Navigate } from 'react-router-dom';
import Appartements from '../../Data/Appartements.json';


export const Appartement = () => {

    let { id } = useParams();
    // Extraction du paramètre 'id' de l'URL en utilisant le hook 'useParams'

    const Appart = Appartements.find((item) => item.id == id)
    // Recherche de l'appartement correspondant à l'id dans le tableau 'Appartements'
    if (Appart == null)
    // Vérification si l'appartement n'est pas trouvé (null)
    { return <Navigate to="/Error" /> }
    // Redirection vers la page d'erreur en utilisant le composant 'Navigate' de React Router

    // Si l'appartement est trouvé, le contenue de la page s'affiche



    return (
        <div>
            <Header />
            <Slider data={Appart.pictures} />
            <div className='bloc-appart'>
                <div className='first-bloc-appart'>
                    <Title data={Appart.title} />
                    <Location data={Appart.location} />
                    <Tags data={Appart.tags} />
                </div>
                <div className='scnd-bloc-appart'>
                    <Hosts name={Appart.host.name} picture={Appart.host.picture} />
                    <Rating rating={parseInt(Appart.rating)} />
                </div>
            </div>
            <div className='thrd-bloc-appart'>
                <Collapse title="Description" description={Appart.description} />
                <Collapse title="Equipements" description={Appart.equipments} />
            </div>
            <Footer />
        </div>
    )
}