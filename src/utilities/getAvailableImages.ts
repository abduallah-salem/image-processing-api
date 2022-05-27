import { promises as fs } from 'fs'
/**
 * This function takes a Path of a directory and returns an array of its contents
 * @param path path to the directory that we need to get its contents
 * @returns an array of files
 */
const getAvailableFiles = async (path: string): Promise<string[]> => {
    const filesArray: string[] = await fs.readdir(path)
    return filesArray
}

export default getAvailableFiles
