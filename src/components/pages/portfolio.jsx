import example from '../../assets/example.jpg'
import kk from '../../assets/images/kk.png'
import blog from '../../assets/images/mrnibbles.png'
import weather from '../../assets/images/weatherappp.png'

export default function Portfolio() {
    const projects = [
        {
            name: `Krypt Keeper`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: kk
        },
        {
            name: `Tech Blog`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: blog
        },
        {
            name: `Weather App`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione minima asperiores voluptate aut eum hic. Natus possimus nesciunt voluptatem.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: weather
        },

    ]




    return (
        <>
            <h1>Portfolio Page</h1>
            <div className="test">
            {projects.map((project, i) => (
            <section id={"proj-"+i} className="add-margin card my-card" key={i}>
                <div className="card-image">
                    <figure className="project-image">
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
            </section>
            
            ))}
            </div>
        </>
    )
}