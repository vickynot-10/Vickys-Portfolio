import "./toaster.css";
import { useState, useEffect } from "react";

function Toaster({
  minwidthToaster,
  MessagefontSize = 'clamp(14px,1vw,20px)' ,
  message,
  width = 'auto',
  height = 'auto',
  type = "info",
  center,
  fontColor,
  iconColor,
  AutoHideDuration=null ,
  justifyContentToaster = 'center' ,
  onClose,
}) {
  const [show, isShow] = useState(true);
 
  useEffect(() => {
    if(!AutoHideDuration || AutoHideDuration <= 0 || AutoHideDuration === '' || AutoHideDuration === ' '||
    AutoHideDuration === null || AutoHideDuration === undefined){
        return;
    }
    const timer = setTimeout(() => {
      onClose()
    }, AutoHideDuration);
    return () => clearTimeout(timer);
  }, [AutoHideDuration]);
 
  if (!show) {
    return null;
  }
 
  return (
    <div id="toaster-container">
      <div
        id="toaster"
        style={{
          minWidth  : minwidthToaster,
          width: width,
          height: height,
          justifyContent : justifyContentToaster ,
          ...(center === "yes" && {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }),
        }}
        className={type}
      >
        <div id="toaster-p-div">
          <p
            style={{
              fontSize : MessagefontSize,
              color: fontColor,
              textTransform : "capitalize"
            }}
          >
            
            {message}
          </p>
        </div>
        <button id="bg-iconbtn" onClick={onClose} aria-label="Close Message" >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toaster;