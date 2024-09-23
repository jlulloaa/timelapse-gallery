import { useEffect, useRef, useMemo } from 'react';
import { InitImage, ToolTips } from '../utils/tools';
import { Link } from 'react-router-dom';

// Initialise canvas size
const canvasSize = [1920, 1080];
const urlStr = "Da_Vinci_Vitruve_Luc_Viatour.png";

function Home() {

    const canvasRef = useRef();

    const img = useMemo(() => InitImage(urlStr), []);

    useEffect(() => {
      const ctx = canvasRef.current.getContext("2d");
      img.onload = () => {
        // Centre the image into the canvas
        // get context of the canvas
        const img2canv = [img.width/ctx.canvas.width, img.height/ctx.canvas.height];
        const maxRatio = Math.max(...img2canv);
        // ctx.globalAlpha = 0.5;
        if (maxRatio > 1) {
          // Image size is larger than the canvas
          if (img2canv[0] > img2canv[1]) {
            // Width ratio is greater than height ratio ==> resize based on width
            const newHeight = (img.height/img.width)*ctx.canvas.width
            ctx.drawImage(img, 0, (ctx.canvas.height*0.5 - newHeight*0.5), ctx.canvas.width, newHeight);
          } else {
            // Height ratio is greater than width ratio ==> resize based on height
            const newWidth = (img.width/img.height)*ctx.canvas.height;
            ctx.drawImage(img, (ctx.canvas.width*0.5 - newWidth*0.5), 0, newWidth, ctx.canvas.height);
          }
        } else {
          console.log(`Image Sizes: [${img.width}, ${img.height}]`)
          // Image fits ok in the canvas
          ctx.drawImage(img, 0, 0);
        }
        // ctx.globalAlpha = 1.0;
      };
    }, [img]);

    return (
        <div>
            <h2 data-tip data-for="startTip"> Galería de imágenes </h2>
            <div>
            <Link to="/" > 
              <canvas className="img-fluid"
                      ref={canvasRef}
                      width={canvasSize[0]}
                      height={canvasSize[1]}
                      style={{ border: "1px solid white" }}
              />
            </Link>
            <ToolTips></ToolTips>
            </div>
        </div>
      )
    }
    export default Home;