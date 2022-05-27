import sharp from 'sharp'

/**
 * This function resizes a given image to new dimensions as provided in the api request
 * @param image image name from the received request
 * @param width new image width
 * @param height new image height
 * @returns resized image path
 */
const resizeImage = async (
    image: string,
    width: number,
    height: number,
    fileExtension: string
): Promise<string> => {
    //declare and send the new file's variable
    const newFile: string = `${image}-${width}-${height}.${fileExtension}`
    try {
        //Assign the image path to sharp through a variable
        const sourceImage = sharp(`public/images/${image}.${fileExtension}`)
        //resize image
        await sourceImage.resize({
            width: width,
            height: height,
        })
        //output the image to file
        await sourceImage.toFile(`public/images/resized/${newFile}`)
    } catch (e: unknown) {
        return `An error has occured ${e as string}`
    }
    //return file name
    return newFile
}

export default resizeImage
