import example from '../../assets/example.jpg'
import kk from '../../assets/images/kk.png'
import blog from '../../assets/images/mrnibbles.png'
import weather from '../../assets/images/weatherappp.png'
import hive from '../../assets/images/hivess.jpg'
export default function Portfolio() {
    const projects = [
        {
            name: `Krypt Keeper`,
            desc: `Use a zip code to search for spooky events in your area.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://github.com/Pandax19/krypt-keeper`,
            img: kk
        },
        {
            name: `Tech Blog`,
            desc: `Create blog posts that other users can react to.`,
            deployment: `https://blogofdoom-3134a54443ce.herokuapp.com/`,
            repo: `https://github.com/blickenderfer/techblog`,
            img: blog
        },
        {
            name: `Weather App`,
            desc: `Track the forecast in any city in the world.`,
            deployment: `https://krypt-keeper-117e4612a77a.herokuapp.com/`,
            repo: `https://blickenderfer.github.io/weatherapp/`,
            img: weather
        },
        {
            name: `Hive`,
            desc: `A social media site for gamers.`,
            deployment: `https://hive1-03d1291901c2.herokuapp.com/`,
            repo: `https://github.com/blickenderfer/hive`,
            img: hive
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