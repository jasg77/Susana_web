document.addEventListener('DOMContentLoaded', function() {
    const leerMasLinks = document.querySelectorAll('.leer-mas');
    const detailsDialog = document.getElementById('details-dialog');
    const detailsContent = document.getElementById('details-content');
    const closeDialogButton = document.getElementById('close-dialog');

    leerMasLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                detailsContent.innerHTML = targetSection.innerHTML;
                detailsDialog.showModal();
            } else {
                console.error(`No se encontró la sección con id: ${targetId}`);
            }
        });
    });

    closeDialogButton.addEventListener('click', function() {
        detailsDialog.close();
    });
});
