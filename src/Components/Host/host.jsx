import './host.scss';

export const Hosts = ({ name, picture }) => {
    return (
        <div className='host-bloc'>
            <div className='host-card'>
                <div className='host-img'>
                    <img src={picture} alt="Photo de l'hébergeur" />
                </div>
                <div className='host-text'>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}