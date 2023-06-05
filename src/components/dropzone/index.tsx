import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import dropzoneImage from "../../assets/dropzoneImage.jpg"
import css from './dropzone.css';

type FileWithDataURL = {
  file: File;
  dataURL: string;
};

type DropzoneProps={
  // onFileUpload: (file: File) => void;
  onFileUpload: (fileWithDataURL: FileWithDataURL) => void;
  name:string,
  required:"true"|"false"
}



export function Dropzone({onFileUpload,name}:DropzoneProps) {
  const [preview, setPreview] = useState("");
  const [showDefaultImage, setShowDefaultImage] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles: 1,
  //   onDrop: (files: File[]) => {
  //     const file = files[0];
  //     const filePreview = URL.createObjectURL(file);
  //     setPreview(filePreview);
  //     setShowDefaultImage(false)
  //     onFileUpload(file)
  //     setSelectedFile(file);
  //   },
  // });
  onDrop: (files: File[]) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataURL= event.target.result as string;
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
      setShowDefaultImage(false);
      onFileUpload({file, dataURL});
      setSelectedFile(file);
    };

    reader.readAsDataURL(file);
  },
});
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {showDefaultImage ? (
          <img className={css.img} src={dropzoneImage}alt="Imagen por defecto" />
        ) : (
          <img className={css.img}  src={preview} alt="Vista previa de la imagen" />
        )}
      </div>
    </div>

  );
}



