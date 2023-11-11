

function MyTag({ level, lang }) {
    return (
        <div className='tag' >
            <p><span>{lang}</span> {level}</p>
        </div >
    );
}



export default MyTag;