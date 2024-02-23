import { readDir, BaseDirectory, createDir } from '@tauri-apps/api/fs';

const getLibraries = async () => {
    const kotodomoPath = `${BaseDirectory.Document}/kotodama`;

    try {
        // Attempt to read the directory
        const entries = await readDir('kotodama', { dir: BaseDirectory.Document });

        // If the directory exists, return the entries
        return entries;
    } catch (error) {
        try {
            // Directory doesn't exist, create it
            await createDir('kotodama', { dir: BaseDirectory.Document, recursive: true });
            return [];
        } catch (createError) {
            console.error("Error creating directory:", createError);
            throw createError; // Rethrow the error to indicate the failure
        }
    }
};

export default getLibraries;