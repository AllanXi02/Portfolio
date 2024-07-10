import React from "react";

const DropLiEl = ({ liname, setPage }) => {
  const links = [
    {
      name: `${liname} Project`,
      path: `/${liname}Sublink1`,
    },
    {
      name: `${liname} Goal`,
      path: `/${liname}Sublink2`,
    },
  ];
  const list = links.map((link) => {
    return (
      // Only render li element if liname does not contain "Roses"
      !liname.includes("Personal Intro") && (
        <li key={link.path} >
          <a
            href={link.path}
      
            onClick={(e) => {
              e.preventDefault();
              setPage(link.name);
            }}
            aria-label={`Dropdown ${link.name}`} // Add aria-label attribute here 
          >
            {link.name}{" "}
          </a>
        </li>
      )
    );
  });
  return <ul className="dropdown" aria-label=" Menu Dropdown">{list}</ul>;
};

export default DropLiEl;
