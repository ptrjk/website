

function SkillCard({ title, description, img }) {

    return <div className="SkillCard">
        <div className="icon">
            <img src={img} alt='Icon'></img>
        </div>
        <h4>{title}</h4>
        <p>
            {description}
        </p>
    </div>
}

export default SkillCard;