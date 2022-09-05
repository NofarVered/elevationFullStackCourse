const domElement = document.querySelector('.foo') as HTMLInputElement;
domElement.addEventListener('input', function(event) {
    const e = event.target as HTMLInputElement;
    console.log(e.value);
});
