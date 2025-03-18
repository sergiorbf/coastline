'use client';
import { createContext, useContext, useId, useState } from "react";
const fileInputContext = createContext({});
export function FileInputRoot(props) {
    const id = useId();
    const [files, setFiles] = useState([]);
    function onFilesSelected(files, multiple) {
        if (multiple) {
            setFiles((state) => [...state, ...files]);
        }
        else {
            setFiles(files);
        }
    }
    return (<fileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props}/>
    </fileInputContext.Provider>);
}
export const useFileInput = () => useContext(fileInputContext);
