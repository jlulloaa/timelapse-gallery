import {Tooltip as ReactTooltip} from "react-tooltip";
// import { useEffect } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
// import { Link } from 'react-router-dom';

const InitImage = (urlStr) => {
    const image = new Image();
    image.src = urlStr;
    return image;
  }
  


  const ToolTips = () => {

    const tooltipFormat = {
        place: "bottom",
        type: "dark",
        effect: "float",
        multiline: true,
        offset: {'top': 1, 'left': 1},
        border: false,
        backgroundColor: "gray",
        textColor: "white",
        delayHide: 10
    };

    const idTip = {
        homeTip: "Go to Home page", 
        createAccTip: <>Add a new <br/> account</>,
        startTip: "Click en la imagen para comenzar",
        streamTip: "Click en la imagen para iniciar video",
        existAccTip: <>Access your <br/> account</>,
        logoutTip: <>Click to Logout</>,
        newAccTip: "Click to add account",
        depositTip: <>Add funds <br/> to your account</>,
        depositClickTip: "Click to deposit",
        depositAmountTip: "Enter amount",
        withdrawTip: <>Draw funds out <br/> from your account</>,
        withdrawClickTip: "Click to withdraw",
        withdrawAmountTip: "Enter amount", 
        transferTip: <>Transfer funds <br/> to other accounts</>,
        transferClickTip: "Click to transfer",
        transferAmountTip: "Enter amount",
        aboutTip: "The small print",
        allDataTip: <>Historic <br/> transactions</>,
        noAccountTip: <>Must have an account <br/> to enable this option</>, 
        exportEnabledTip: "Click to download", 
        balanceTip: <>Check your <br/> current balance</>,
        productsTip: "Check our products",
        ODMtooltip: "Object Data Modelling"
    }

    let toolTipFlags = Object.entries(idTip).map((item, idx) => {
                return (
                  <ReactTooltip key={idx} id={item[0]} {...tooltipFormat} >
                    {item[1]}
                  </ReactTooltip>
                  );
              });
          
    return (
        <>
            {toolTipFlags}
        </>
    )
};

export {InitImage, ToolTips};