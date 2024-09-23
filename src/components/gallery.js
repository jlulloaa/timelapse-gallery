import { useEffect, useState } from "react";
import { LoadingPage } from '../utils/tools';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Tools required to connect the S3 bucket
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";


function Gallery() {
    function ImageCarousel() {
        const img_url =`https://${process.env.REACT_APP_BUCKET}.${process.env.REACT_APP_S3_URL}/`
        console.log(img_url)
        return (
                <Carousel>
                    {objects.map((o) => (
                        <div key={o.ETag}>
                            <img src={img_url + o.Key} alt={o.Key}/>
                            <p className="legend"> {o.Key} </p>
                        </div>
                    ))}
            </Carousel>
    
        ); 
    }
    
    const [loadingSpinner, setLoadingSpinner] = useState(true);

    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const client = new S3Client({
        region: process.env.REACT_APP_REGION,
        credentials: fromCognitoIdentityPool({
            clientConfig: { region: process.env.REACT_APP_REGION },
            identityPoolId: process.env.REACT_APP_IDENTITYPOOLID
        }),
        });
        const command = new ListObjectsCommand({ Bucket: process.env.REACT_APP_BUCKET });
        client.send(command).then(({ Contents }) => {
                                    setObjects(Contents || [])
                                    setLoadingSpinner(false)}
                                );
        }, []);

    return (
        <>
        <div className="App">
            <h2 data-tip data-for="startTip"> Galería de imágenes </h2>
        </div>
        { loadingSpinner ? <LoadingPage /> : <ImageCarousel />
        }
        </>
    )
}
export default Gallery;