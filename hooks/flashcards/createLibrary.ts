import { createDir, BaseDirectory } from "@tauri-apps/api/fs"

const createLibrary = async (libraryName: string) => {
    await createDir(`kotodama/${libraryName}`, { dir: BaseDirectory.Document, recursive: true });

}

export default createLibrary;