import React from "react";

export default function Items(props) {
  const getIcon = (iconType) => {
    switch (iconType) {
      case "PDF":
        return (
          <img
            alt="pdf"
            className="pdf-icon"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/534px-PDF_file_icon.svg.png"
            }
          />
        );
      case "DOC":
        return (
          <svg
            className="doc-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            fill="#fff"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <path
              stroke="#979593"
              d="M67.1716,7H27c-1.1046,0-2,0.8954-2,2v78 c0,1.1046,0.8954,2,2,2h58c1.1046,0,2-0.8954,2-2V26.8284c0-0.5304-0.2107-1.0391-0.5858-1.4142L68.5858,7.5858 C68.2107,7.2107,67.702,7,67.1716,7z"
            />
            <path
              fill="none"
              stroke="#979593"
              d="M67,7v18c0,1.1046,0.8954,2,2,2h18"
            />
            <path
              fill="#C8C6C4"
              d="M79 61H48v-2h31c.5523 0 1 .4477 1 1l0 0C80 60.5523 79.5523 61 79 61zM79 55H48v-2h31c.5523 0 1 .4477 1 1l0 0C80 54.5523 79.5523 55 79 55zM79 49H48v-2h31c.5523 0 1 .4477 1 1l0 0C80 48.5523 79.5523 49 79 49zM79 43H48v-2h31c.5523 0 1 .4477 1 1l0 0C80 42.5523 79.5523 43 79 43zM79 67H48v-2h31c.5523 0 1 .4477 1 1l0 0C80 66.5523 79.5523 67 79 67z"
            />
            <path
              fill="#185ABD"
              d="M12,74h32c2.2091,0,4-1.7909,4-4V38c0-2.2091-1.7909-4-4-4H12c-2.2091,0-4,1.7909-4,4v32 C8,72.2091,9.7909,74,12,74z"
            />
            <path d="M21.6245,60.6455c0.0661,0.522,0.109,0.9769,0.1296,1.3657h0.0762 c0.0306-0.3685,0.0889-0.8129,0.1751-1.3349c0.0862-0.5211,0.1703-0.961,0.2517-1.319L25.7911,44h4.5702l3.6562,15.1272 c0.183,0.7468,0.3353,1.6973,0.457,2.8532h0.0608c0.0508-0.7979,0.1777-1.7184,0.3809-2.7615L37.8413,44H42l-5.1183,22h-4.86 l-3.4885-14.5744c-0.1016-0.4197-0.2158-0.9663-0.3428-1.6417c-0.127-0.6745-0.2057-1.1656-0.236-1.4724h-0.0608 c-0.0407,0.358-0.1195,0.8896-0.2364,1.595c-0.1169,0.7062-0.211,1.2273-0.2819,1.565L24.1,66h-4.9357L14,44h4.2349 l3.1843,15.3882C21.4901,59.7047,21.5584,60.1244,21.6245,60.6455z" />
          </svg>
        );
      default:
        break;
    }
  };
  return (
    <div className="item_container">
      <a href={props.url} target="_blank">
        <div className="item_container-icon">{getIcon(props.type)}</div>
        <label htmlFor={props.url}>{props.name}</label>
      </a>
    </div>
  );
}
