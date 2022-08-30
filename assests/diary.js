let saveFile = () => {
   
        // Get the data from each element on the form.
    const title = document.getElementById('txtName');
    const date = document.getElementById('txtDate');
        const entry = document.getElementById('msg');
       
        // This variable stores all the data.
        let data =
            '\r Title: ' + title.value + ' \r\n '+
            'Date: ' + date.value + '\r\n '+
            'Entry: ' + entry.value  ;
            
       
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }