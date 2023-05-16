import React, {useState,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import dropzoneImage from "../../assets/dropzoneImage.jpg"
import css from "./index.css"



export function Dropzone (props){
    const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles:1,

    
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview:URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className={css.thumb} key={file.name}>
      <div className={css.thumbInner}>
        <img
          src={file.preview}
          className={css.img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <aside className={css.thumbsContainer}>
        {thumbs.length > 0 ? thumbs : (
          <div className={css.thumb} key="dropzone-image">
            <div className={css.thumbInner}>
              <img src={dropzoneImage} className={css.img} />
            </div>
          </div>
        )}
      </aside>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
       <button>subi tu imagen</button>
      </div>
    </section>
  );
}



