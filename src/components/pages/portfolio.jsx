import example from '../../assets/example.jpg'

export default function Portfolio() {
    const projects = [
        {
            name: `Krypt Keeper`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: example
        },
        {
            name: `Krypt Keeper`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: example
        },
        {
            name: `Krypt Keeper`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: example
        },

    ]




    return (
        <div>
            <h1>Portfolio Page</h1>
            <div className="test">
            {projects.map(project => (
            <div className="card is-one-third add-margin">
                <div className="card-image">
                    <figure className="image">
                        <img src={project.img} alt="Placeholder image" className="cat"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{project.name}</p>
                        </div>
                    </div>

                    <div className="content">
                        {project.desc} 
                        <br />
                        <a href={project.repo}>GitHub Repository</a> <a href={project.deployment}>Heroku Deployment</a>
                        <br />
                    </div>
                </div>
            </div>
            
            ))}
            </div>
        </div>
    )
}