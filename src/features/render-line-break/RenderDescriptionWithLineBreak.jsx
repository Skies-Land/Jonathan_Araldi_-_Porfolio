import React from 'react';

// Saut de line \n d'un fichier JSON convertie par un <br> dans le JSX
const RenderDescriptionWithLineBreaks = ({description}) => {
    return description.split('\n').map((line, index, array) => (
        <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));
};

export default RenderDescriptionWithLineBreaks;