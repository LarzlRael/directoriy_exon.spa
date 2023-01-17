import "./style/StyledDropzone.css";
import { NormalButton } from "../buttons";
import { Loading } from "../animation";
import { useDropzone } from "react-dropzone";
import React, { useMemo } from "react";
import FlexContainer from "./style/FlexContainer";
import { useState, useEffect } from "react";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#469585",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
function StyledDropzone(props) {
  const { uploadFiles, name, load, small, maxSize, fileExtension } = props;

  const [files, setfiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: fileExtension ? fileExtension : "" });

  useEffect(() => {
    setfiles(acceptedFiles);
  }, [acceptedFiles]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <FlexContainer small={small} className="StyledDropzone">
      {maxSize && <p>Tamaño máximo permitido {maxSize}MB</p>}
      <div className="StyledDropzone__square" {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <i className="fas fa-cloud-upload-alt"></i>
        <h4 className="StyledDropzone__h3--gray">
          Arrastra y suelta tus archivos aquí
        </h4>
        <h4 className="StyledDropzone__h3--orange">o presiona para buscar</h4>
        {/* <h4 className="StyledDropzone__h3--orange">
          (Solo se aceptaran imágenes)
        </h4> */}
      </div>
      <div className="StyledDropzone__fields">
        {files.length !== 0 ? (
          <div className="StyledDropzone__container">
            <h3 className="StyledDropzone__Fh3">Listos para enviar</h3>
            <ViewFiles setfiles={setfiles} files={files} maxSize={maxSize} />
            <div className="StyledDropzone__btn">
              {load ? (
                <NormalButton onClick={() => uploadFiles(files, name)}>
                  Subir archivo
                </NormalButton>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        ) : (
          <h4 className="StyledDropzone__Fh4">No hay documentos</h4>
        )}
      </div>
    </FlexContainer>
  );
}
function ViewFiles({ files, maxSize, setfiles }) {
  function remove(index) {
    let newFiles = files;
    newFiles.splice(index, 1);
    setfiles([...newFiles]);
  }
  return files.map((file, i) => {
    const f = file.path.split(".");
    const size = file.size / 1024 / 1024;
    const validateSize = maxSize ? (size <= maxSize ? "correct" : "wrong") : "";
    return (
      <div key={i} className="StyledDropzone__file">
        <div className="">{f[f.length - 1]}</div>
        <h4>{file.path}</h4>
        <h5 className={validateSize}>{Number(size.toFixed(2))}MB</h5>
        <i className="fas fa-times" onClick={() => remove(i)}></i>
      </div>
    );
  });
}
export default StyledDropzone;
