import './profile.css'

export const Userprofile=(props)=>{
    return(
        <div className="UserProfile">
        <h2>Name: {props.name}</h2>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Location:</strong> {props.location}</p>
        <p><strong>Bio:</strong> {props.bio}</p>
      </div>
    )
}