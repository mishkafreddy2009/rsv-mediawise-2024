import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './Dropzone.module.css'

const Dropzone = () => {
    const [drag, setDrag] = useState(false);

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]

        const formData = new FormData()
        // formData.append('file', files[0])
        // axios.post('url',formData)

        setDrag(false)
    }

    return (
        <div className={styles.dropzone}>
            {drag 
            ? <div className={styles.dropArea}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e =>dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}
            >отпустите файл</div>
            : <div className={styles.NotDropArea}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e =>dragStartHandler(e)}
            >перенесите файлы</div>}
        </div>
    )
  
}

export default Dropzone;