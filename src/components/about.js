import Card from './card';

const thisYear = new Date().getFullYear();
const header = <h3>FrutIQ - Gallery</h3>;

const title = <><a href="https://github.com/jlulloaa/timelapse-gallery" target="_blank" rel="noreferrer">
    <button className="btn btn-warning">
    FrutIQ on GitHub
    </button>
    </a><hr/>
    <h5>FrutIQ</h5> 
    </>;
const about = <> 
    Simple Web Page to display an image gallery hosted in an S3 AWS Bucket
    <br/><br/>
    Web application under development
    <hr/>
    </>;

const body = <>
    <a href="https://jlulloaa.github.io" target="_blank" rel="noreferrer" alt='GitHub Icon'>
        <button className="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to see other projects" > 
            &copy; {thisYear} ISANDEX <img src="imgs/logo_192x120.png" height="16" alt='iSANDEx Logo'></img>
        </button>
    </a>
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

