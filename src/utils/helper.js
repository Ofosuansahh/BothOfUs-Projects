export function b64toBlob(b64Data, sliceSize = 512) {
    const block = b64Data.split(";");
    const contentType = block[0].split(":")[1];
    const realData = block[1].split(",")[1];
    
    let byteCharacters = atob(realData);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
}