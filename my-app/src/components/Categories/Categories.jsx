// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { useDropzone } from 'react-dropzone';
// import styles from './Categories.module.css';
// import { useMemo } from "react";

// const DropdownMenu = () => {
//   return (
//     <DropdownButton id="dropdown-basic-button" title="Dropdown" className={styles.dropdown}>
//       <Dropdown.Item href="#/action-1" className={styles.dropdownItem}>TRP</Dropdown.Item>
//       <Dropdown.Item href="#/action-2" className={styles.dropdownItem}>Cost</Dropdown.Item>
//     </DropdownButton>
//   );
// };

// // const DropzoneComponent = () => {
// //   const { getRootProps, getInputProps } = useDropzone();

// //   return (
// //     <div {...getRootProps()} className={styles.dropzone}>
// //       <input {...getInputProps()} />
// //       <p className={styles.dropzoneText}>Drag 'n' drop some files here, or click to select files</p>
// //     </div>
// //   );
// // };

// const DropzoneComponent = () => {
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: 'image/*',
//       multiple: false
//     });
  
//     return (
//       <div {...getRootProps()} className={styles.dropzone}>
//         <input {...getInputProps()} />
//         <p className={styles.dropzoneText}>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     );
//   };

// export { DropdownMenu, DropzoneComponent };

import React from "react";
import styles from './Categories.module.css'

const Checkbox = () => {
    const [activeCheckbox, setActiveCheckbox] = React.useState(null);
  
    return (
      <div className={styles.categories}>

        <div key={1} className={styles.trp}> <label> TRP</label>
            <input 
            type="checkbox"
            onClick={() => setActiveCheckbox(1)}
            checked={1 === activeCheckbox}
            />
         </div>
         <div key={2} className={styles.cost}> <label> Cost</label>
            <input 
            type="checkbox"
            onClick={() => setActiveCheckbox(2)}
            checked={2 === activeCheckbox}
            />
         </div>

        
      </div>
    );
  };

  export default Checkbox;