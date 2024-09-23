import Card from './card';

const thisYear = new Date().getFullYear();
const header = <h3>ABOUT TimeLapse Gallery</h3>;

const title = <><a href="https://github.com/jlulloaa/timelapse-gallery" target="_blank" rel="noreferrer">
    <button className="btn btn-warning">
    TimeLapse on GitHub
    </button>
    </a><hr/>
    <h5>TimeLapse</h5> 
    </>;
const about = <> 
    Simple Web Page to display an image gallery hosted in an S3 AWS Bucket
    <br/><br/>
    Web application under development
    <hr/>
    Frontend under development in <a href="https://reactjs.org" target="_blank" rel="noreferrer" >
            <img src="reactIcon.svg" alt='React Icon' height="16"></img>
        </a> React and styled with 
    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" alt='Bootstrap Icon' height="16"></img>
    </a>
    Bootstrap, using <a href="https://bootswatch.com" target="_blank" rel="noreferrer">
    <img src="https://bootswatch.com/_assets/img/logo-dark.svg" alt='Bootswatch Icon' height="16"></img>
    </a>
    Bootswatch theme's <a href="https://bootswatch.com/spacelab" target="_blank" rel="noreferrer" className="btn btn-primary" alt='SpaceLab Icon'>Spacelab</a>
    <hr/>
    </>;

const body = <>
    <a href="https://jlulloaa.github.io" target="_blank" rel="noreferrer" alt='GitHub Icon'><button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to see my other projects" > &copy; {thisYear} Jose L. Ulloa <img src="./logo192.png" height="16" alt='iSANDEx Logo'></img></button></a>
    </>

function About() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header={header}
            title={title}
            text={about}
            body = {body}
         />
    );
}

export default About;

