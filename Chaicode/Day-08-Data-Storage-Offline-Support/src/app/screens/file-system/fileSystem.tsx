import { Directory, File, Paths } from 'expo-file-system';
import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const FileSystemScreen = () => {

    const [output, setOutput] = useState("");
    const [downloadedImageUri, setDownloadedImageUri] = useState<string | null>(null);
    const [downloadedUri, setDownloadedUri] = useState<string | null>(null);

    // create new file
    const demoFile = new File(
        Paths.document, "demo.txt"
    )
    console.log(Paths.document)

    // copy file for  copy 
    const copiedFile = new File(
        Paths.document,
        "copy-demo.txt"
    )

    // file for move
    const movedFile = new File(
        Paths.document,
        "Moved-demo.txt"
    );


    // Directory 
    const notesDirectory = new Directory(
        Paths.document, "notes"
    )
    console.log(notesDirectory);



    // write file
    const writeFile = async () => {
        await demoFile.write(
            "Hello from File System"
        )
        setOutput("File written successfully")
    }

    // readFile
    const readFile = async () => {
        const data = await demoFile.text();
        setOutput(data);
        return data;
    }


    // Append File / Modifiy file
    const appendFile = async () => {
        const oldData = await demoFile.text();
        demoFile.write(
            oldData + "\n New Data Added"
        );
    }


    // Duplicate File or Copy File
    const copyFile = async () => {
        //  copying one file data to another file
        demoFile.copy(copiedFile);
        setOutput("File Copied Successfully");
    }

    // Move file
    const moveFile = async () => {
        // file moved 
        copiedFile.move(movedFile);
        setOutput("File moved Successfully")
    }

    // delete file
    const deleteFile = async () => {
        demoFile.delete();
        movedFile.delete();
        setOutput("Files Deleted Successfully")

    }

    // file information
    const getFileInfo = async () => {
        const info = {
            exists: demoFile.exists,
            size: demoFile.size,
            extension: demoFile.extension,
            uri: demoFile.uri,
            name: demoFile.name,
        }
        //  to fromat json 2 --- space of two
        setOutput(JSON.stringify(info, null, 2))
    }



    // folder create
    const createFolder = () => {
        notesDirectory.create();
    }


    // read folder/ Directory
    const readFolder = async () => {
        const files = notesDirectory.list();
        setOutput(JSON.stringify(files.map((f) => f.uri), null, 2))
    }


    // download file
    const downloadFile = async () => {

        // this create temp folder
        const folder = new Directory(Paths.cache, "image");

        await folder.create({
            idempotent: true,
            intermediates: true,
        });

        const file = new File(folder, "image.jpg");

        const downloadedFile = await File.downloadFileAsync(
            "https://picsum.photos/300",
            file
        );
        setDownloadedImageUri(downloadedFile.uri);

        setOutput(JSON.stringify({
            uri: downloadedFile.uri,
            size: downloadedFile.size,
            exists: downloadedFile.exists,
            extension: downloadedFile.extension,
        }));


        console.log(downloadedFile.uri);
        if (downloadedFile && downloadedFile.uri) {
            setDownloadedUri(downloadedFile.uri);
            setOutput("Downloaded: " + downloadedFile.uri);
        }


    }




    // upload file
    const uploadFile = async () => {

        // this create temp folder
        const folder = new Directory(Paths.cache, "image");

        await folder.create({
            idempotent: true,
            intermediates: true,
        });

        const file = new File(folder, "image.jpg");

        const downloadedFile = await File.downloadFileAsync(
            "https://picsum.photos/300",
            file
        );
        setDownloadedImageUri(downloadedFile.uri);

        setOutput(JSON.stringify({
            uri: downloadedFile.uri,
            size: downloadedFile.size,
            exists: downloadedFile.exists,
            extension: downloadedFile.extension,
        }));


        console.log(downloadedFile.uri);
        if (downloadedFile && downloadedFile.uri) {
            setDownloadedUri(downloadedFile.uri);
            setOutput("Downloaded: " + downloadedFile.uri);
        }


    }


    return (
        <View style={{
            width: '90%',
            flex: 1,

        }}>
            <Text>FileSystemScreen</Text>

            <View style={styles.gap}></View>
            <Button title='Write File' onPress={writeFile} />
            <View style={styles.gap}></View>
            <Button title='Read File' onPress={readFile} />
            <View style={styles.gap}></View>
            <Button title='Append File' onPress={appendFile} />
            <View style={styles.gap}></View>
            <Button title='Copy File' onPress={copyFile} />
            <View style={styles.gap}></View>
            <Button title='Move File' onPress={moveFile} />
            <View style={styles.gap}></View>
            <Button title='File info' onPress={getFileInfo} />
            <View style={styles.gap}></View>
            <Button title='Create Folder' onPress={createFolder} />
            <View style={styles.gap}></View>
            <Button title='Read Folder/ Directory' onPress={readFolder} />
            <View style={styles.gap}></View>
            <Button title='Download File' onPress={downloadFile} />
            <View style={styles.gap}></View>
            <Button title='Delete File' onPress={deleteFile} />

            {downloadedUri ? (
                <Image source={{ uri: downloadedUri }} style={styles.image} />
            ) : null}

            <ScrollView style={{
                width: '100%',
                padding: 12,
                borderRadius: 12,
                borderWidth: 1,
                marginTop: 12,
                marginBottom: 18,
            }}>
                <Text style={{
                    marginTop: 15,
                    fontWeight: 500,
                    fontSize: 21,
                }}>File Details</Text>
                <Text>{output}</Text>
                <View style={styles.gap}></View>
                <View style={styles.gap}></View>
                <Text>Paths.document</Text>
                <Text>{Paths.document.uri}</Text>
                <View style={styles.gap}></View>
                <View style={styles.gap}></View>
                <Text>Paths.cache</Text>
                <Text>{Paths.cache.uri}</Text>
            </ScrollView>
        </View>

    )
}

export default FileSystemScreen

const styles = StyleSheet.create({
    gap: {
        marginTop: 3,
        marginBottom: 6,
    }
    ,
    image: {
        width: 100,
        height: 100,
        marginTop: 12,
        borderRadius: 8,
    }
})