import self from "../../assets/images/me.jpeg"

export default function About(){
    return (
        <div>
            <h1>About Claire</h1>
            <div class="card about-card">
  <div class="card-image">
    <figure class="image self">
      <img src={self}/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">

      </div>
      <div class="media-content">
        <p class="title is-4">Hi there! I am a fullstack web developer based in Philadelphia. I am passionate about collaboration, esoteric coding languages and shuffling data to and fro.</p>

      </div>
    </div>
  </div>
</div>
        </div>
    )
}