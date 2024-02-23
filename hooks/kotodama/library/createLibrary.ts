import { createDir, BaseDirectory, writeFile, writeTextFile } from "@tauri-apps/api/fs"

const createLibrary = async (libraryName: string) => {
    // Creating library directories
    createDir(`kotodama/${libraryName}/card-packs`, { dir: BaseDirectory.Document, recursive: true });

    // Library Statistics
    const statistics = {
        cardsPracticedToday: 0,
        weeklyGoal: 32,
        currentStreak: 0
    }

    // Creating Library Statistics file
    writeTextFile({ path: `kotodama/${libraryName}/library-statistics.json`, contents: JSON.stringify(statistics) }, { dir: BaseDirectory.Document })

}

export default createLibrary;